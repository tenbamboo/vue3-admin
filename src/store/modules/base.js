// import { createStore } from 'vuex';

export default {
  namespaced: true,
  state: {
    currentUserInfo: {},
  },
  mutations: {
    // 设置用户数据
    setCurrentUserInfo(state, info) {
      state.currentUserInfo = info;
    },
  },
  actions: {},
};
