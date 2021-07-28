// import Vue from 'vue';
// import Vuex from 'vuex';
import { createStore } from 'vuex';
import base from './modules/base.js';
import layout from './modules/layout.js';
// Vue.use(Vuex);

const store = createStore({
  modules: {
    base,
    layout,
  },
});


export const setupStore = (app)=>{
  app.use(store);
}

export default{
  setupStore
}
