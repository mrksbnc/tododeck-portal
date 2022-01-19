'use strict';

import { isTokenValid } from './utils/token';
import { createRouter, createWebHashHistory, Router } from 'vue-router';

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Authentication',
      component: () => import('./views/AuthenticationView.vue'),
    },
  ],
});

router.beforeResolve((to, from, next) => {
  const validTokenFound = isTokenValid();

  if (!validTokenFound && to.path != '/') {
    next({ path: '/' });
    return;
  }
  next();
});

export default router;
