
export function createErrorGuard(router) {
    router.onError((errorMsg) => {
        if(errorMsg.toString().includes('Failed to fetch dynamically imported module')){
            router.push('/networkError')
        }
    })

}

export default {
    createErrorGuard
}