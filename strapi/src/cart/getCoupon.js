import axios from 'axios'
import { _format } from '../_format.js'

export async function getCoupon(coupon, items, API_URL) {
    let { data } = await axios.get(API_URL + '/api/coupon-codes?filters[code][$eq]=test') //add custom controller for this?
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.error(err)
            return err
        })
    const error = { coupon_data: { coupon_amount: 0 } }
    if(!data) return error
    const coupon_data = _format(data)
    const {
        amount,
        use_amount_as_percentage,
        free_shipping,
        stock,
        apply_individually,
        start,
        expire,
        products,
        product_categories
    } = coupon_data[0]
    let coupon_amount = 0
    console.log(coupon_data)

    // compare dates

    const isNow = true
    if(!isNow) return error

    // stock

    if(!stock || stock <= 0) return error

    // apply_individually or to the whole cart



    coupon_data.coupon_amount = coupon_amount
    return { coupon_data }
}