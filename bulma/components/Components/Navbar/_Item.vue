<template>
    <NuxtLink v-if="!isDiv" to="/" class="navbar-item">
        <slot></slot>
    </NuxtLink>
    <div v-else class="navbar-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        isDiv: {
            type: Boolean,
            default: false
        }
    }
}
</script>