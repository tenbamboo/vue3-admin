
export function createBeforeEachGuard(router) {
    router.beforeEach(code404Guard)
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
    createBeforeEachGuard
}