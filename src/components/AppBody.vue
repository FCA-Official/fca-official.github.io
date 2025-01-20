<template>
<div class="text-left justify-around" style="width: 82vw ;max-width: 720px; background-color: var(--q-dark-page);">
    <RouterView />
</div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
div {
  word-wrap: break-word;
}
</style>
