import { useRouter, useRoute } from 'vue-router';
import { useStore } from "vuex";
import { computed, unref } from "vue";

import { useRedo } from '@/hooks/page/'
const defaultPath = '/'

export function useTabs() {

    const route = useRoute()
    const router = useRouter()
    const store = useStore();
    const tabsList = computed(() => store.state.layout.tabsList);

    const getCurrentRoute = () => {
        return tabsList.value.find(
            (item) => item.path === route.fullPath
        );
    }
    const getCurrentRouteIndex = () => {
        return tabsList.value.findIndex(
            (item) => item.path === route.fullPath
        );
    }

    const closeAll = () => {
        store.commit("layout/clearTabs");
        router.push(defaultPath);
    }
    const closeOther = () => {
        store.commit("layout/closeTabsOther", [getCurrentRoute()]);
    };

    const closeCurrnetTab = (redirectUrl) => {
        const tabList = tabsList.value

        const index = getCurrentRouteIndex()


        const delItem = tabList[index];
        store.commit("layout/delTabsItem", { index });
        if (!redirectUrl) {
            const item = tabList[index]
                ? tabList[index]
                : tabList[index - 1];
            if (item) {
                if (delItem.path === route.fullPath) {
                    router.push(item.path);
                }
            } else {
                router.push(defaultPath);
            }
        } else {
            router.push(redirectUrl);
        }

    };

    const closeTabs = (index) => {
        const tabList = tabsList.value

        if (isNaN(index)) {
            index = getCurrentRouteIndex()
        }

        const delItem = tabList[index];
        store.commit("layout/delTabsItem", { index });
        // if (!redirectUrl) {
        const item = tabList[index]
            ? tabList[index]
            : tabList[index - 1];
        if (item) {
            if (delItem.path === route.fullPath) {
                router.push(item.path);
            }
        } else {
            router.push(defaultPath);
        }
        // } else {
        //     router.push(redirectUrl);
        // }

    };
    const setTabs = (_route) => {
        const tabList = tabsList.value
        const isExist = tabList.some(
            (item) => item.path === _route.fullPath
        );
        if (!isExist) {
            if (tabList.length >= 8) {
                store.commit("layout/delTabsItem", { index: 0 });
            }
            store.commit("layout/setTabsItem", {
                name: _route.name,
                title: _route.meta.title,
                path: _route.fullPath,
            });
        }
    };

    const setTitle = (title) => {
        store.commit("layout/updateTabsTitle", {
            index: getCurrentRouteIndex(), title
        });
    }

    const refreshPage = async () => {
        closeTabs()
        const redo = useRedo(router);
        try {
            await redo();
        } catch (e) {

        }

    }



    return {
        closeAll, closeOther, closeTabs, setTabs, setTitle, refreshPage,closeCurrnetTab
    }

}