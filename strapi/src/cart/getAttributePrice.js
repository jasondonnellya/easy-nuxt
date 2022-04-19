export function getAttributePrice(item) {
    let attribute_price = null
    let attribute_discount_price = null
    if(item.product_attribute_value && item.product.assigned_product_attributes) {
        item.product.assigned_product_attributes.forEach((attribute) => {
            if(!attribute.product_attribute_value) return
            if(attribute.product_attribute_value.title === item.product_attribute_value) {
                attribute_price = attribute.price
                attribute_discount_price = attribute.discount_price
            }
        })
    }
    return { attribute_price, attribute_discount_price }
}