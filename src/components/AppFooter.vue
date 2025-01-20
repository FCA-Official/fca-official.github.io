<template>
    <!-- <div v-if="displayMode != deviceMode.browser"> -->
    <q-footer elevated class="bg-grey-8 text-white" style="max-width: 100vw">
        <div class="q-pa-none">
            <div class="q-gutter-y" style="max-width: 100vw">
                <q-tabs indicator-color="transparent" active-color="secondary" class="bg-black text-grey-5 shadow-2"
                    no-caps dense v-model="$route.name">
                    <q-tab v-for="item in drawerItems" :ripple="false" v-show="item.enable" :name="item.name"
                        :icon="item.icon" :label="item.title" @click="router.replace({ path: item.path })"
                        active-class="drawer-active-class" />
                </q-tabs>
            </div>
        </div>
    </q-footer>
    <!-- </div> -->
</template>

<script setup>
import { useRouter, useRoute } from "vue-router"
import { ref } from "vue"
import { drawerItems } from "../constants/drawerItems"
import { devDeviceType, deviceMode } from "../handlers/handlers"
const router = useRouter()
const route = useRoute()
const displayMode = ref(devDeviceType())

</script>

<style scoped></style>