<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container>
      <!-- <q-page padding> -->
       <AppBody />
      <!-- </q-page> -->
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<script setup>
import AppFooter from './components/AppFooter.vue'
import AppBody from './components/AppBody.vue'
import { RouterLink } from 'vue-router'
// import { ref } from 'vue'

</script>

<style scoped>
</style>