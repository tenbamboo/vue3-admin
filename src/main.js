import App from './App.vue';
import { createApp } from 'vue';
import { setupRouter,router } from './router';
import { setupStore } from './store';
import { setupDirectives } from './directives';
import { setupElementUI } from './components/elementUI';
import { setupRouterGuard } from './router/guard/index';


import 'normalize.css';



async function bootstrap() {
    const app = createApp(App);

    setupElementUI(app);
    setupRouter(app);
    setupStore(app);
    setupDirectives(app);
    await setupRouterGuard(router);
    await router.isReady();
    app.mount('#app',true);
}

bootstrap()



