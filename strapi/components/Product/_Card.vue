<template>
    <Card>
        <CardImage v-show="getFeaturedImage">
            <Image class="is-4by5">
                <BLink :to="linkPrefix + product.slug">
                    <img class="contain" :src="getFeaturedImage">
                </BLink>
            </Image>
        </CardImage>
        <CardContent>
            <BTitle>
                <BLink :to="linkPrefix + product.slug" class="has-text-primary">
                    {{ product.title }}
                </BLink>
            </BTitle>
            <Content>
                {{ product.excerpt }}
            </Content>
            <Columns class="has-text-centered">
                <Column v-show="product.price">
                    <Content>
                        {{ getPrice }}
                    </Content>
                </Column>
                <Column>
                    <Button class="is-primary" @click="AddToCart">
                        <Icon class="is-large">
                            <i class="fa-solid fa-cart-plus fas fa-lg has-text-white"></i>
                        </Icon>
                    </Button>
                </Column>
            </Columns>
        </CardContent>
    </Card>
</template>

<script>
import { formatPrice } from '../../src/cart/format-price.js'
import { loginWrapper } from '../../src/loginWrapper.js'
export default {
    props: {
        product: {
            type: Object,
            default: () => {
                return {}
            }
        },
        linkPrefix: {
            type: String,
            default: '/store/products/'
        }
    },
    computed: {
        getFeaturedImage() {
            const config = useRuntimeConfig()
            const img = this.product.featured_image.url
            return img ? (config.API_URL + img) : null
         },
        getPrice() {
            const price = this.product.price
            return formatPrice(price)
        },
    },
    methods: {
        async AddToCart() {
            const id = parseFloat(this.product.id)
            const quantity = 1
            const product_attribute_value = null
            
            // add a loading wrapper too
            await loginWrapper({ callback: addToCart, args: [{ product: id, quantity, product_attribute_value }] }, this)
            
            
            //this.$nuxt.$emit('refresh-account')
        },
    }
}
</script>