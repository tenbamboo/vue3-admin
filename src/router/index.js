// import VueRouter from 'vue-router';
// import * as VueRouter from 'vue-router';

import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes.js';

export const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0,left:0 };
  },
  routes,
});

export const setupRouter = (app) => {
  app.use(router);
}


export default {
  setupRouter,
  router
};
