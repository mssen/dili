import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import RestaurantView from '@/views/RestaurantView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/restaurant/:id',
      name: 'restaurant',
      component: RestaurantView,
    },
  ],
});

export default router;
