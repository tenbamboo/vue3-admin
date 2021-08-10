import { store } from '@/store/'

export async function createPermissionGuard(router) {
    await store.dispatch('permission/getMenuList')

}

export default {
    createPermissionGuard
}