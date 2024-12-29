import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


export const routes = [{
  path: '/',
  name: 'FCA Official',
  meta: { desc: "Home" },
  component: HomeView
},
{
  path: '/blog',
  name: 'Blog',
  meta: { desc: "" },
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import('../views/BlogView.vue'),
},
{
  path: "/:pathMatch(.*)*",
  name: 'FCA Official',
  meta: { desc: "" },
  component: HomeView
}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
