import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import PostPage from './pages/PostPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/posts/:slug', name: 'post', component: PostPage, props: true },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
