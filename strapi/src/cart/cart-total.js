import { formatPrice } from './format-price.js'
import { getCoupon } from './getCoupon.js'
import { getShipping } from './getShipping.js'
import { getAttributePrice } from './getAttributePrice.js'
import { getSiteSettings } from './getSiteSettings.js'

export async function _cartTotal(items, format, coupon, API_URL) {
    let { site } = await getSiteSettings(API_URL)
    let total = 0
    let original_price = 0
    let discounted_price = 0
    let { coupon_data } = await getCoupon(coupon, items, API_URL)
    let { shipping_price, shipping } = getShipping(items, site)

    // need to populate data for site and coupon, maybe time to setup GraphQL?

    items.forEach((item) => {
        let { attribute_price, attribute_discount_price } = getAttributePrice(item)
        
        // original price
        let o_price = attribute_price ? attribute_price : item.product.price
        original_price += o_price * item.quantity
        
        // discounted price
        let d_price = attribute_price ? attribute_discount_price : item.product.discount_price
        discounted_price += d_price * item.quantity
        
        // price
        let price = d_price ? d_price : o_price
        total += price * item.quantity
    })

    total -= coupon_data.coupon_amount

    if(site.free_shipping_over && total > site.free_shipping_over_amount) {
        shipping_price = 0
        shipping = 'Free'
    }

    return format ? {
        total: formatPrice(total),
        original_price: formatPrice(original_price),
        discounted_price: formatPrice(discounted_price),
        coupon_amount: formatPrice(coupon_data.coupon_amount),
        shipping,
        shipping_price: formatPrice(shipping_price) 
    } : {
        total, original_price, discounted_price, coupon_amount: coupon_data.coupon_amount, shipping, shipping_price
    }
}

export function _generateOrderItems(cartItems) {
    const items = []
    cartItems.forEach((item) => {
        // generate order in frontend
        let { attribute_price } = getAttributePrice(item)
        let price = attribute_price ? attribute_price : (item.product.discount_price ? item.product.discount_price : item.product.price)
        items.push({
            title: item.product.title,
            quantity: item.quantity,
            total: price * item.quantity,
            individual_price: price,
            product_attribute_value: item.product_attribute_value
        })
    })
    return items
}