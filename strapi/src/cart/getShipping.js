export function getShipping(items, site) {
    let shipping_price = 0
    let shipping = null

    const { standard_shipping } = site

    // check all shipping strategy in cart, calculate for their specific products then apply each strategy to shipping price
    // if no shipping then use standard shipping otherwise free

    return { shipping_price, shipping }
}