<template>
    <div ref="viewer">
    </div>
</template>

<script>
// import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
export default {
    props: {
        content: {
            type: String,
            default: ''
        }
    },
    async mounted() {
        if(process.browser) {
            const _ViewerDefault = await import('@toast-ui/editor/dist/toastui-editor-viewer')
            const Viewer = _ViewerDefault.default
            const viewer = new Viewer({
                el: this.$refs.viewer,
                initialValue: this.content
            });
            console.log(Viewer)
        }
    }
}
</script>
