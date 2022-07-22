import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/MainBoard/MainBoard.vue'),
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: () => import('../components/CurrentRecipe/CurrentRecipe.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
