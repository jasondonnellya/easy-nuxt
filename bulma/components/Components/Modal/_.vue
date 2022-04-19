<template>
    <span>
        <span @click="active = true">
            <slot name="button"></slot>
        </span>
        <div class="modal" :class="active ? 'is-active' : ''">
            <slot name="content"></slot>
            <ModalClose @click="active = false" />
        </div>
    </span>
</template>

<script>
export default {
    data() {
        return {
            active: false
        }
    }
}
</script>