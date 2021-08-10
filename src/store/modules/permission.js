import { fetchMenuData } from "@/api/mock";

export default {
  namespaced: true,
  state: {
    menuList: [],
  },
  mutations: {
    setMenuList(state, data) {
      state.menuList = data
    },
  },
  actions: {
    getMenuList({ commit }, data) {
      return fetchMenuData().then((res) => {
        commit('setMenuList', res.list)
      });
    }
  },
  modules: {},
};
