'use strict';

import { createRouter, createWebHashHistory, Router } from 'vue-router';

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('./views/AuthView.vue'),
    },
  ],
});

export default router;
