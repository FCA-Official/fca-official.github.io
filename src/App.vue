<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" @click="toggleLeftDrawer">
      <q-toolbar>
        <q-btn dense flat round icon="menu" />
        <q-toolbar-title class="absolute-center">
          {{ $route.name }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-icon name="coronavirus" size="lg" color="white" class="q-pa-md" />
      <q-list>
        <q-item v-for="item in drawerItems" :to="item.to" :replace="displayMode == 'standalone'" clickable v-ripple
          exact active-class="drawer-active-class">
          <q-item-section avatar>
            <q-icon :name="item.icon" size="md" />
          </q-item-section>
          <q-item-section class="text-h6">{{ item.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <RouterView />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { drawerItems } from "./constants/drawerItems"
import { getPWADisplayMode } from "./handlers/handlers"

const leftDrawerOpen = ref(false)
const displayMode = ref(getPWADisplayMode())
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<style scoped>
.drawer-active-class {
  color: var(--q-secondary);
}
</style>