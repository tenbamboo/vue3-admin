export default {
  namespaced: true,
  state: {
    tabsList: [],
    collapse: false,
  },
  mutations: {
    updateTabsTitle(state, data) {
      state.tabsList[data.index].title = data.title
    },
    delTabsItem(state, data) {
      state
        .tabsList
        .splice(data.index, 1);
    },
    setTabsItem(state, data) {
      state
        .tabsList
        .push(data);
    },
    clearTabs(state) {
      state.tabsList = [];
    },
    closeTabsOther(state, data) {
      state.tabsList = data;
    },
    closeCurrentTag(state, data) {
      for (let i = 0, len = state.tabsList.length; i < len; i += 1) {
        const item = state.tabsList[i];
        if (item.path === data.$route.fullPath) {
          if (i < len - 1) {
            data
              .$router
              .push(state.tabsList[i + 1].path);
          } else if (i > 0) {
            data
              .$router
              .push(state.tabsList[i - 1].path);
          } else {
            data
              .$router
              .push('/');
          }
          state
            .tabsList
            .splice(i, 1);
          break;
        }
      }
    },
    // 侧边栏折叠
    handleCollapse(state, data) {
      state.collapse = data;
    },
  },
  actions: {},
  modules: {},
};
