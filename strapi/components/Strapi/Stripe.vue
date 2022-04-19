<template>
    <span>
        <p v-show="error">{{ error }}</p>
        <div v-show="!error">
            {{ account }}
            <br><br>
            {{ items }}
            <!-- Create element displaying products from cart -->
            <div id="payment"></div>
            <Button @click="ConfirmPayment">Confirm Payment</Button>
        </div>
    </span>
</template>

<script>
import { initStripe, getClientSecret, createStripeElement, confirmPayment } from '~/plugins/easy-nuxt/strapi/src/stripe.js'
import { get } from '~/plugins/easy-nuxt/strapi/src/get.js'
export default {
    data() {
        return {
            error: null,
            items: 'items',
            account: 'test'
        }
    },
    async mounted() {
        const config = useRuntimeConfig()
        const user = await get({ endpoint: '/api/users/me', auth: true })
        this.account = user.data
        // if(this.account.cart.items) this.$router.push('/store/cart')
        const { data } = await getClientSecret({
            billing_address: { postcode: 'test' },
            delivery_address: { postcode: 'test' },
            coupon: 'test',
            delivery_instructions: 'Leave behind garage'
        })
        const client_secret = data
        if(client_secret) {
            await initStripe(config.STRIPE_PUBLISHABLE_KEY, client_secret)
            createStripeElement('payment', {})
        } else {
            this.error = 'Error with Client Secret. Contact Support'
        }
    },
    methods: {
        async ConfirmPayment() {
            const config = useRuntimeConfig()
            await confirmPayment(config.API_URL)
        }
    }
}
</script>