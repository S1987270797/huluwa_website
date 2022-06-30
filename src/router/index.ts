import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/home/Home.vue')
    // children: [
    //   {
    //     path: '/home',
    //     redirect: '/home/welfare'
    //   },
    //   {
    //     path: 'consulting',
    //     component: () => import('@/views/home/cpns/GameActivityConsulting.vue')
    //   },
    //   {
    //     path: 'characteristic',
    //     component: () => import('@/views/home/cpns/GameCharacteristic.vue')
    //   },
    //   {
    //     path: 'welfare',
    //     component: () => import('@/views/home/cpns/GameWelfareStation.vue')
    //   }
    // ]
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/components/NotFound.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
