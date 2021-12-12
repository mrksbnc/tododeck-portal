'use strict';

import { createRouter, createWebHashHistory, Router } from 'vue-router';

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: () => import('./components/views/LoginView.vue'),
    // },
  ],
});

export default router;
