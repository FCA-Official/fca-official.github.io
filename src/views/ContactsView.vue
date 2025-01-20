<template>
  <div class="">
    <h4 class="q-mt-none q-mb-md text-weight-bold">{{ $route.meta.desc }}</h4>
    <div>
      <EssentialLink :listing="appLinks" />
    </div>
  </div>
</template>
<script setup>
import EssentialLink from "../components/EssentialLink.vue"
import { appLinks } from 'https://fca-official.github.io/fca-posts/index/data.js'

</script>

<style scoped></style>