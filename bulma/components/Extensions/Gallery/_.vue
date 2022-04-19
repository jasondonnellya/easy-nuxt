<template>
    <div v-if="images.length > 0" class="--easy-nuxt__gallery-container">
        <div
            class="--easy-nuxt__image-thumbnailsContainer is-pulled-left"
             v-if="invert()"
            :style="thumbnailContainer"
        >
            <div
                class="--easy-nuxt__image-thumbnails"
                :style="thumbnails"
            >
                <img
                    v-for="(image, index) in images"
                    :key="index"
                    :src="image"
                    class="--easy-nuxt__image-thumbnail contain"
                    :class="active(index)"
                    :style="thumbnail"
                    @click="set(index)"
                />
            </div>
        </div>
        <div class="--easy-nuxt__gallery is-pulled-left" :style="gallery">
            <div
                class="--easy-nuxt__gallery-items"
                :style="galleryItems + ' ' + translate"
            >
                <img
                    v-for="(image, index) in images"
                    @dragstart="galleryStartDrag"
                    @dragend="galleryEndDrag"
                    @touchstart="galleryStartDrag"
                    @touchend="galleryEndDrag"
                    :key="index"
                    :src="image"
                    class="--easy-nuxt__gallery-item"
                    :class="(cover ? 'cover' : 'contain') + active(index)"
                    :style="galleryItem + ' ' + galleryItemTranslate(index)"
                />
            </div>
            <a class="--easy-nuxt__gallery-prev" @click="prev">
                <Icon class="is-large">
                    <i
                        class="fa-2x fa-solid fa-circle-chevron-left"
                    ></i>
                </Icon>
            </a>
            <a class="--easy-nuxt__gallery-next" @click="next">
                <Icon class="is-large">
                    <i
                        class="fa-2x fa-solid fa-circle-chevron-right"
                    ></i>
                </Icon>
            </a>
        </div>
        <!--

            @mousedown="startDrag"
            @mouseup="endDrag"
            @mousemove="drag"

        -->
        <div
            class="--easy-nuxt__image-thumbnailsContainer is-pulled-left"
            :ref="'thumbnails' + this.uid"
            v-if="!invert()"
            :style="thumbnailContainer"
        >
            <div
                class="--easy-nuxt__image-thumbnails"
                :style="thumbnails"
            >
                <img
                    v-for="(image, index) in images"
                    :key="index"
                    :src="image"
                    class="--easy-nuxt__image-thumbnail contain"
                    :class="active(index)"
                    :style="thumbnail"
                    @click="set(index)"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            default: () => {
                return []
            }
        },
        size: {
            type: Object,
            default: () => {
                return {
                    width: '100%',
                    height: '400px'
                }
            }
        },
        thumbnail_size: {
            type: Object,
            default: () => {
                return {
                    width: '150px',
                    height: '80px'
                }
            }
        },
        gap: {
            type: String,
            default: '10px'
        },
        thumbnail_pos: {
            type: String,
            default: 'bottom'
        },
        cover: {
            type: Boolean,
            default: true
        },
        uid: {
            type: String,
            default: '1'
        }
    },
    data() {
        return {
            index: 0,
            ignoreInvert: false,
            mouse: false,
            mousePos: {
                x: 0,
                y: 0,
            },
            mouseScroll: {
                x: 0,
                y: 0,
            },
            drag: {
                x: 0,
                y: 0
            }
        }
    },
    computed: {
        translate() {
            let width = this.getGalleryWidth()
            const translate = 'transform: translateX(calc(-' + width + ' / ' + this.images.length + ' * ' + (this.index) + '));'
            return translate
        },
        gallery() {
            let width = this.getInvertedWidth()
            let style = 'width: calc(' + width + ');'
            style += ' '
            style += 'height: ' + this.size.height + ';'
            return style
        },
        galleryItems() {
            let width = this.getGalleryWidth()
            let style = 'width: calc(' + width + ' * ' + this.images.length + ');'
            style += ' '
            style += 'height: ' + this.size.height + ';'
            return style
        },
        galleryItem() {
            let width = this.getGalleryWidth()
            let style = 'width: calc(' + width + ' / ' + this.images.length + ');'
            return style
        },
        thumbnailContainer() {
            let style = ''
            if(this.thumbnail_pos === 'left' || this.thumbnail_pos === 'right') {
                style += 'width: ' + this.thumbnail_size.width + '; height: ' + this.size.height + ';'
                style += ' '
                style += 'overflow-y: auto;'
                style += ' '
                style += 'overflow-x: hidden;'
                if(this.thumbnail_pos === 'left') {
                    style += ' '
                    style += 'margin-right: ' + this.gap + ';'
                }
                if(this.thumbnail_pos === 'right') {
                    style += ' '
                    style += 'margin-left: ' + this.gap + ';'
                }
            } else {
                style += 'overflow-x: auto;'
                style += ' '
                style += 'overflow-y: hidden;'
                if(this.thumbnail_pos === 'top') {
                    style += ' '
                    style += 'margin-bottom: ' + this.gap + ';'
                }
                if(this.thumbnail_pos === 'bottom') {
                    style += ' '
                    style += 'margin-top: ' + this.gap + ';'
                }
            }
            return style
        },
        thumbnails() {
            let style = ''
            if(this.thumbnail_pos === 'left' || this.thumbnail_pos === 'right') {
                style += 'height: auto;'
                style += ' '
                style += 'width: ' + this.thumbnail_size.width + ';'
                style += ' '
                style += 'white-space: wrap;'
            } else {
                style += 'height: ' + this.thumbnail_size.height + ';'
                style += ' '
                style += 'width: auto;'
                style += ' '
                style += 'white-space: nowrap;'
            }
            return style
        },
        thumbnail() {
            let style = 'width: ' + this.thumbnail_size.width + ';'
            style += ' '
            style += 'height: ' + this.thumbnail_size.height + ';'
            return style
        }
    },
    mounted() {
        document.addEventListener('resize', this.resize)
    },
    methods: {
        galleryStartDrag(e) {
            if(e.pageX) {
                this.drag = {
                    x: e.pageX,
                    y: e.pageY,
                }
            }
            if(e.targetTouches) {
                this.drag = {
                    x: e.targetTouches[0].pageX,
                    y: e.targetTouches[0].pageY,
                }
            }
        },
        galleryEndDrag(e) {
            if(e.pageX) {
                if(this.drag.x > e.pageX) this.next()
                else if(this.drag.x < e.pageX) this.prev()
            }
            if(e.changedTouches[0]) {
                if(this.drag.x > e.changedTouches[0].pageX) this.next()
                else if(this.drag.x < e.changedTouches[0].pageX) this.prev()
            }
        },
        thumbnailStartDrag(e) {
            const thumbnails = this.$refs['thumbnails' + this.uid]
            this.mousePos = {
                x: e.pageX - thumbnails.offsetLeft,
                y: e.pageY - thumbnails.offsetTop
            }
            this.mouseScroll = {
                x: thumbnails.scrollLeft,
                y: thumbnails.scrollTop
            }
            if(this.thumbnail_pos === 'left' || this.thumbnail_pos === 'right') {
                thumbnails.scrollTop = this.mouseScroll.y;
            } else {
                thumbnails.scrollLeft = this.mouseScroll.x;
            }
            this.mouse = true
        },
        thumbnailendDrag(e) {
            this.mouse = false
        },
        thumbnailDrag(e) {
            if(!this.mouse) return
            const thumbnails = this.$refs['thumbnails' + this.uid]
            const newPos = {
                x: e.pageX - thumbnails.offsetLeft - this.mousePos.x,
                y: e.pageY - thumbnails.offsetTop - this.mousePos.y
            }
            if(this.thumbnail_pos === 'left' || this.thumbnail_pos === 'right') {
                thumbnails.scrollTop = this.mouseScroll.y - newPos.y;
            } else {
                thumbnails.scrollLeft = this.mouseScroll.x - newPos.x;
            }
        },
        resize() {
            if(window.innerWidth <= 768) this.ignoreInvert = true
            else this.ignoreInvert = false
        },
        active(index) {
            return this.index === index ? ' active' : ''
        },
        invert() {
            return (this.thumbnail_pos === 'top' || this.thumbnail_pos === 'left')
        },
        getInvertedWidth() {
            if(this.thumbnail_pos === 'left' || this.thumbnail_pos === 'right') {
                return '(' + this.size.width + ' - ' + this.thumbnail_size.width + ' - ' + this.gap + ')'
            }
            return this.size.width
        },
        getGalleryWidth() {
            return this.size.width
        },
        galleryItemTranslate(index) {
            return 'left: calc(100% / ' + this.images.length + ' * ' + index + ')'
        },
        prev() {
            if(this.index > 0) this.index -= 1
            else this.index = this.images.length - 1
        },
        next() {
            if(this.index < this.images.length - 1) this.index += 1
            else this.index = 0
        },
        set(index) {
            this.index = index
        }
    }
}
</script>
