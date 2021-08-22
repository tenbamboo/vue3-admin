import { store } from '@/store/'


export async function createPermissionGuard(router) {

    if(store.getters['base/isExistUser']){
        //从缓存刷新获取用户信息
        store.commit('base/refershCurrentUser');
        
        await store.dispatch('permission/getMenuList',store.state.base.currentUserInfo)
    }
}

export default {
    createPermissionGuard
}