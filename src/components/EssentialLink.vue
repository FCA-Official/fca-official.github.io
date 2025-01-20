<template>
  <div class="q-pa-none" style="max-width: 720px">
    <q-list v-for="item in props.listing" bordered padding>
      <q-item clickable tag="a" target="_blank" :href="item.link">
        <q-item-section top avatar>
          <q-avatar color="primary" text-color="white" :icon="item.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
          <q-item-label caption lines="2">{{ item.caption }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
const props = defineProps({
  listing: Array
})

</script>
