import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
// import 'element-plus/packages/theme-chalk/src/index.scss';
import '@/assets/css/override.scss';
import 'dayjs/locale/zh-cn'

export const setupElementUI = (app) => {

    // app.use(ElementPlus, { size: 'small', locale: localeZH });
    app.use(ElementPlus, {  locale: zhCn, });
    
}

export default {
    setupElementUI
}
