import { useStore } from "vuex";
import { store } from '@/store/'

export function useCurrentUserInfo() {

    const _store = useStore()

    const initCurrentUserInfo = async () => {
        const st = _store || store
        if (st.getters['base/isExistUser']) {
            //从缓存刷新获取用户信息
            st.commit('base/refershCurrentUser');
            await st.dispatch('permission/getMenuList', st.state.base.currentUserInfo)
            return true
        }

    }




    return {
        initCurrentUserInfo
    }

}