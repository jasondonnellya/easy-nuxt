<template>
    <div class="dropdown" :class="toggle ? 'is-active' : ''" @click="toggle = !toggle">
        <slot>
        </slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toggle: false
        }
    }
}
</script>