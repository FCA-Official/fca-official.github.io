<template>
  <div v-if="!isLoaded" style="text-align: center">
    <q-spinner-grid color="primary" size="2.5rem" />
  </div>
  <div class="q-pa-none q-ma-none" v-else>
    <div class="q-pa-none q-ma-none" v-if="markdown == '' || !hasNetwork">
      <PostList :listing="posts" />
    </div>
    <div v-else class="q-pa-none q-ma-none q-mt-md">
      <div class="q-pa-none q-ma-none textwrap" v-html="markdownToHtml"></div>
      <div v-if="route.name != appHome[0].name">
        <PostFooter />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import { useRouter, useRoute } from "vue-router"
import axios from 'axios'
import { marked } from "marked"
import * as K from "../constants/constants"
import { index } from 'https://fca-official.github.io/fca-posts/index/data.js'
import { appText } from "../constants/text"
import DOMPurify from 'isomorphic-dompurify'
import PostList from "./PostList.vue"
import PostFooter from "./PostFooter.vue"
import { routes } from "../router/index"

export default {
  components: { PostList, PostFooter },
  props: ["id"],
  watch: {
    $route(to, from) {
      this.loadData()
    }
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    const hasNetwork = ref(true)
    const isLoaded = ref(false)
    const markdown = ref("")
    const posts = ref(index.posts)
    let appHome = routes.filter(e => {
      return e.path == '/'
    })

    const fetchHanlder = async () => {
      let url = ""
      let runFetch = false
      if (route.name == appHome[0].name) {
        url = `${appText.links.prod}${index.home.id}.md`
        runFetch = true
      }
      if (index.posts.map(e => { return e.id }).includes(route.params.id)) {
        url = `${appText.links.prod}${route.params.id}.md`
        runFetch = true
      } else {
        markdown.value = ""
      }
      if (runFetch) {
        try {
          let resp = await axios.get(url)
          markdown.value = resp.data
        } catch {
          markdown.value = ""
        }
      }
    }

    const loadData = async () => {
      isLoaded.value = false
      if (window.navigator.onLine) {
        try {
          await fetchHanlder()
        } catch {
          markdown.value = ""
        }
      } else {
        hasNetwork.value = false
      }
      isLoaded.value = true
    }

    loadData()

    return {
      hasNetwork,
      isLoaded,
      markdown,
      appText,
      loadData,
      posts,
      route,
      appHome
    }
  },
  computed: {
    markdownToHtml() {
      return DOMPurify.sanitize(marked.parse(this.markdown))
    },
  },
}
</script>

<style scoped>
.infoText {
  font-size: 1.25rem;
}

p {
  white-space: pre-wrap;
}

.textwrap {
  max-width: 100vw;
}

.forcewrap {
  word-break: break-all;
}

a:link {
  text-decoration: none;
  color: black;
}

a:visited {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: none;
  color: black;
}

a:active {
  text-decoration: none;
  color: black;
}

.clickSpan {
  cursor: pointer;
  text-decoration: underline;
}
</style>