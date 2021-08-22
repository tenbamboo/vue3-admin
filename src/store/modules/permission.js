import { fetchMenuData } from "@/api/mock";

function loopList(list) {
  return list.reduce((res, item) => {
    if (item.subs) {
      res = res.concat(loopList(item.subs))
    }
    res.push(item.index)

    return res
  }, [])

}

export default {
  namespaced: true,
  state: {
    menuList: [],
  },
  getters: {
    menuPathList(state) {
      return loopList(state.menuList)
    }
  },
  mutations: {
    setMenuList(state, data) {
      state.menuList = data
    },
  },
  actions: {
    getMenuList({ commit }, userInfo) {
      return fetchMenuData(userInfo).then((res) => {
        commit('setMenuList', res)
      });
    }
  },
  modules: {},
};
