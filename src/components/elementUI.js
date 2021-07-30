import ElementPlus from 'element-plus';
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css';
// import 'element-plus/packages/theme-chalk/src/index.scss';
import '@/assets/css/override.scss';
import 'dayjs/locale/zh-cn'

export const setupElementUI = (app) => {

    // app.use(ElementPlus, { size: 'small', locale: localeZH });
    app.use(ElementPlus, { size: 'small', locale: localeZH });
    
}

export default {
    setupElementUI
}
