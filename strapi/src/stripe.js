import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js/pure.js'
loadStripe.setLoadParameters({ advancedFraudSignals: false }) // https://github.com/stripe/stripe-js#disabling-advanced-fraud-detection-signals
let stripe, elements
// https://stackoverflow.com/questions/67502617/integrate-stripe-elements-in-nuxt-js

export async function getClientSecret({ billing_address, delivery_address, coupon, delivery_instructions }) {
    const { data, error } = await axios.post('/easy-nuxt/strapi/stripe', {  data: { billing_address, delivery_address, coupon, delivery_instructions } })
    return { data, error }
}

export async function initStripe(pk, client_secret) {
    if (!stripe) {
        stripe = await loadStripe(pk)
        elements = stripe.elements({ clientSecret: client_secret })
    }
    return { stripe, elements }
}

export function createStripeElement(element, options, id) {
    if(!elements) return
    // https://stripe.com/docs/js/elements_object/create
    // https://stripe.com/docs/js/elements_object/create_payment_element
    let e = elements.create(element, options);
    e.mount('#' + (id ? id : element))
}

export function confirmPayment(API_URL) {
    // https://stripe.com/docs/api/payment_intents/confirm
    stripe.confirmPayment(
            {
                elements,
                confirmParams: {
                // Return URL where the customer should be redirected after the PaymentIntent is confirmed.
                return_url: API_URL + '/api/orders/complete',
            },
        })
        .then(function(result) {
        // if (result.error)
        // Inform the customer that there was an error.
            console.log(result)
        })
}