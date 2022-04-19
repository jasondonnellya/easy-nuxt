export function formatPrice(price) {
    if(!price || price <= 0) return 'Free'
    return '£' + price.toFixed(2)
}
