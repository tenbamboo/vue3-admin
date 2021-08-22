import { createPermissionGuard } from '@/router/guard/permissionGuard.js'
import { createRouterEvnetGuard } from '@/router/guard/routerEvnetGuard.js'
import { createErrorGuard } from '@/router/guard/errorGuard.js'


export async function setupRouterGuard(router) {
    // createPageGuard(router);
    // createPageLoadingGuard(router);
    // createHttpGuard(router);
    // createScrollGuard(router);
    // createMessageGuard(router);
    // createProgressGuard(router);
    await createPermissionGuard(router);
    createErrorGuard(router);
    createRouterEvnetGuard(router);
    // createParamMenuGuard(router); // must after createPermissionGuard (menu has been built.)
    // createStateGuard(router);
}


export default {
    setupRouterGuard
}