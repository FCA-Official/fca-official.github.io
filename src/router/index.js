import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import ContactsView from '../views/ContactsView.vue'
import SettingsView from '../views/SettingsView.vue'
import { getPWADisplayMode } from "../handlers/handlers"
import * as K from "../constants/constants";

const requireInstall = async (to, from, next) => {
  if (getPWADisplayMode() != 'browser' || K.devMode) {
    next()
  } else {
    next(from)
  }
}

export const routes = [{
  path: '/',
  name: 'FCA Official',
  title: 'Home',
  meta: { desc: "Home" },
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import('../views/HomeView.vue'),
  component: HomeView,
  icon: 'home',
  enable: true
},
{
  name: 'Blog',
  path: '/blog/:id',
  title: 'Blog',
  meta: {desc: "About"},
  component: PostView,
  icon: 'description',
  enable: true,
  props: true
},
{
  path: '/contacts',
  name: 'Contacts',
  title: 'Contacts',
  meta: { desc: "Connect" },
  component: ContactsView,
  icon: 'call',
  enable: true
},
{
  path: '/settings',
  name: 'Settings',
  title: 'Settings',
  meta: { desc: "Preferences" },
  component: SettingsView,
  icon: 'settings',
  enable: getPWADisplayMode() != 'browser' || K.devMode,
  beforeEnter: requireInstall,
},
{
  path: "/:pathMatch(.*)*",
  name: 'FCA Official',
  meta: { desc: "Home" },
  component: HomeView
}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
