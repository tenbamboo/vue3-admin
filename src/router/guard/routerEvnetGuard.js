import { store } from '@/store/'

export function createRouterEvnetGuard(router) {
    router.beforeEach(loginGuard)
    router.beforeEach(code404Guard)
    router.beforeEach(code403Guard)
    // cover 第一次进入无权页面时的处理
    router.beforeResolve(code403Guard)
}

const whiteList  =  ['/login','/404',]


const loginGuard = (to, _, next) => {
    if (to.path !== '/login' && !store.getters['base/isExistUser']) {
        console.log('未登录')
        next({
            path: '/login',
            query: {
                redirectUrl: to.fullPath,
            }
        })
        return
    }
    next()
}

const code403Guard = (to, _, next) => {
    if ( to.path !== '/login' && to.path !== '/403' && !store.getters['permission/menuPathList'].includes(to.path)) {
        // const { closeTabs } = useTabs()
        // closeTabs()
        next({
            path: '/403'
        })
        return
    }
    next()
}


const code404Guard = (to, _, next) => {
    if (to.matched.length === 0) {
        next({
            path: '/404'
        })
        return
    }
    next()
}

export default {
    createRouterEvnetGuard
}