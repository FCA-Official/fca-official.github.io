<template>
    <q-pull-to-refresh @refresh="refresh">
        <h4 class="q-mt-none q-mb-md text-weight-bold">{{ $route.meta.desc }}</h4>
        <div v-if="listing.length > 0" class="q-ma-none q-pa-none">
            <div class="q-pa-none q-ma-none" style="max-width: 720px">
                <q-list class="q-pa-none q-ma-none">
                    <q-item class="q-pa-none q-ma-none" v-for="a in listing" :key="a.id" clickable
                        @click="openArticle(a)">
                        <q-item-section>
                            <p class="infoText">
                                {{ a.title }}
                            </p>
                            <q-item-label caption>
                                <p class="dateText">{{ a.id.slice(0, 10) }}</p>
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
        <div v-else>
            <p>{{ appText.noConnection }}</p>
        </div>
    </q-pull-to-refresh>
</template>

<script setup>
const props = defineProps({
  listing: Array
})

import { ref } from "vue"
import { useRouter } from "vue-router"
import { appText } from "../constants/text"
import * as K from "../constants/constants"

const router = useRouter()
const listing = ref(props.listing)


const openArticle = async (item) => {
    try {
        await router.replace({
            name: "Blog",
            params: { id: item.id },
        })
    } catch (err) {
        K.error(err)
    }
}


const refresh = async (done) => {
    setTimeout(() => {
        // loadData()
        done()
    }, 2500)
}

</script>

<style scoped>
.infoText {
    font-size: 1.25rem;
}

.dateText {
    font-size: 1rem;
}
</style>
