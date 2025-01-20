<template>

    <div class="q-pa-md q-gutter-sm justify-around text-center">
        <q-btn round @click="clickBack" :disable="!hasBack" color="secondary" icon="arrow_back" />
        <q-btn round @click="clickBlog" color="secondary" icon="description" />
        <q-btn round @click="clickNext" :disable="!hasNext" color="secondary" icon="arrow_forward" />
    </div>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRouter, useRoute } from "vue-router"
import { ref } from "vue"
import { index } from 'https://fca-official.github.io/fca-posts/index/data.js'


const router = useRouter()
const route = useRoute()

let counter = 0
const current = ref({})
const hasNext = ref(false)
const hasBack = ref(false)
const nextPost = ref({})
const backPost = ref({})

index.posts.forEach(e => {
    let n_num = 0
    let p_num = 0
    if (e.id == route.params.id) {
        current.value = e
        p_num = counter - 1
        n_num = counter + 1
        console.log(p_num, n_num)
        if (p_num >= 0) {
            hasBack.value = true
            backPost.value = index.posts[p_num]
        }
        if (n_num < index.posts.length) {
            hasNext.value = true
            nextPost.value = index.posts[n_num]
        }
    }
    counter += 1
})

const clickBack = () => {
    router.replace({
        name: "Blog",
        params: { id: backPost.value.id },
    })
}

const clickBlog = () => {
    router.replace({
        name: "Blog",
        params: { id: 'index' },
    })
}

const clickNext = () => {
    router.replace({
        name: "Blog",
        params: { id: nextPost.value.id },
    })
}


</script>

<style scoped></style>