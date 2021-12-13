'use strict';

import { isTokenValid } from './utils/token';
import { createRouter, createWebHashHistory, Router } from 'vue-router';

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: () => import('./views/LandingPageView.vue'),
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('./views/DashboardView.vue'),
    },
  ],
});

router.beforeResolve((to, from, next) => {
  const validTokenFound = isTokenValid();

  if (!validTokenFound && to.path != '/') {
    next({ path: '/' });
    return;
  }
  if (validTokenFound && to.path == '/') {
    next({ name: 'Dashboard', path: '/dashboard' });
    return;
  }
  next();
});

export default router;
