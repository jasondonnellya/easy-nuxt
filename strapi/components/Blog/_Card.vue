<template>
    <Card>
        <CardImage v-if="getFeaturedImage">
            <Image class="is-5by3">
                <BLink :to="linkPrefix + blog.slug">
                    <img class="cover" :src="getFeaturedImage">
                </BLink>
            </Image>
        </CardImage>
        <CardContent>
            <BTitle>
                <BLink :to="linkPrefix + blog.slug" class="has-text-primary">
                    {{ blog.title }}
                </BLink>
            </BTitle>
            <Content>
                {{ blog.excerpt }}
            </Content>
        </CardContent>
        <CardFooter>
            <Button class="is-primary is-fullwidth" @click="$router.push(linkPrefix + blog.slug)">Read More</Button>
        </CardFooter>
    </Card>
</template>

<script>
export default {
    props: {
        blog: {
            type: Object,
            default: () => {
                return {}
            }
        },
        linkPrefix: {
            type: String,
            default: '/blog/'
        }
    },
    computed: {
        getFeaturedImage() {
            const config = useRuntimeConfig()
            const img = this.blog.featured_image.url
            return img ? (config.API_URL + img) : null
        }
    }
}
</script>
