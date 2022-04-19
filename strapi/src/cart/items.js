export const _items = (cartItems) => {
    const items = []
    cartItems.forEach((item, index) => {
        let validAttribute = false
        if(item.product_attribute_value) {
            item.product.assigned_product_attributes.forEach(attribute => {
                if(attribute.product_attribute_value.title === item.product_attribute_value) {
                    validAttribute = true
                }
            })
        }
        if(item.product && item.quantity > 0 && (!item.product_attribute_value || validAttribute)) {
            items.push({
                product: item.product.id,
                quantity: item.quantity,
                product_attribute_value: item.product_attribute_value
            })
        }
    })
    return items
}