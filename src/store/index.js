// import Vue from 'vue';
// import Vuex from 'vuex';
import { createStore } from 'vuex';
import base from './modules/base.js';
import layout from './modules/layout.js';
import permission from './modules/permission.js';

// Vue.use(Vuex);

export const store = createStore({
  modules: {
    base,
    layout,
    permission,
  },
});


export const setupStore = (app) => {
  app.use(store);
}

export default {
  setupStore, store
}
