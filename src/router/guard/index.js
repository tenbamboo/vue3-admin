import { createPermissionGuard } from '@/router/guard/permissionGuard.js'
import { createBeforeEachGuard } from '@/router/guard/beforeEachGuard.js'
import { createErrorGuard } from '@/router/guard/errorGuard.js'


export function setupRouterGuard(router) {
    // createPageGuard(router);
    // createPageLoadingGuard(router);
    // createHttpGuard(router);
    // createScrollGuard(router);
    // createMessageGuard(router);
    // createProgressGuard(router);
    createPermissionGuard(router);
    createErrorGuard(router);
    createBeforeEachGuard(router);
    // createParamMenuGuard(router); // must after createPermissionGuard (menu has been built.)
    // createStateGuard(router);
}


export default {
    setupRouterGuard
}