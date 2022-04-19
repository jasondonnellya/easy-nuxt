import { Router } from 'express'
import axios from 'axios'
import { _cartTotal, _generateOrderItems } from '../../src/cart/cart-total.js'
import { _items } from '../../src/cart/items.js'
import initStripe from 'stripe'
const stripe = initStripe(process.env.STRIPE_SECRET_KEY)

const router = Router()

router.post('/stripe', async (req, res) => {
    const bodyData = req.body.data
    const { jwt } = req.signedCookies
    const headers = {
      Authorization: `Bearer ${jwt}`
    }

    
    const user = await axios.get(process.env.API_URL + '/api/users/me', { headers })
      .then(res => { return res })
      .catch(err => {
        console.log(err)
        return null
      })

    if(!user || !user.data) {
      res.json(null)
      return
    }

    if(user.data.cart.items.length <= 0) {
      res.json(null)
      return
    }

    const { total, original_price, discounted_price, coupon_amount, shipping, shipping_price } = await _cartTotal(user.data.cart.items, false, bodyData.coupon, process.env.API_URL)
    if(total <= 0) {
      res.json(null)
      return
    }
    
    let order = {
      total,
      original_price,
      discounted_price,
      coupon_amount: coupon_amount,
      coupon: coupon_amount ? bodyData.coupon : '',
      shipping,
      shipping_price,
      items: _generateOrderItems(user.data.cart.items),
      billing_address: bodyData.billing_address,
      delivery_address: bodyData.delivery_address,
      delivery_instructions: bodyData.delivery_instructions,
      status: 'Pending'
    }
    
    //create customer or check if they exist?
    //create invoice and add id to payment intent

    // https://stackoverflow.com/questions/59687006/adding-products-to-a-payment-with-paymentintents-api
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total * 100, // change to pounds
      currency: 'gbp',
      automatic_payment_methods: {enabled: true},
      receipt_email: user.data.email,
      shipping: {
        name: bodyData.delivery_address.first_name + ' ' + bodyData.delivery_address.last_name,
        phone: bodyData.delivery_address.phone,
        address: {
          city: bodyData.delivery_address.city,
          line1: bodyData.delivery_address.address1,
          line2: bodyData.delivery_address.address2,
          postal_code: bodyData.delivery_address.postcode
        }
      }
    }).catch((err) => {
      console.error(err)
    })
    
    order.payment_id = paymentIntent.id

    await axios.post(process.env.API_URL + '/api/orders', { data: order }, { headers })
      .then(res => { return res })
      .catch(err => {
        console.error(err)
        return err.response.data
      })

    // CREATE STRAPI ORDER WITH paymentIntent.id or client_secret

    res.json({ data: paymentIntent.client_secret })
});

export default router
