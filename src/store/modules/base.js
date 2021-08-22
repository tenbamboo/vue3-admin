// import { createStore } from 'vuex';

export default {
  namespaced: true,
  state: {
    currentUserInfo: {},
  },
  getters: {
    isExistUser(state) {
      return !!(state.currentUserInfo.userId || localStorage.getItem("currentUserInfo"))
    }
  },
  mutations: {
    refershCurrentUser(state) {
      const info = JSON.parse(localStorage.getItem("currentUserInfo"));
      state.currentUserInfo = info;
    },
    // 设置用户数据
    setCurrentUserInfo(state, info) {
      localStorage.setItem("currentUserInfo", JSON.stringify(info));
      state.currentUserInfo = info;
    },
    logoutCurrentUser(state, info) {
      localStorage.removeItem("currentUserInfo");
      state.currentUserInfo = {};
    },
  },
  actions: {},
};
