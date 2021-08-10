import NetworkError from '@/views/sys/error/NetworkError.vue'

const routesList = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */'@/views/sys/user/Login.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/redirect/:path(.*)',
    name: 'Redirect',
    component: () => import(/* webpackChunkName: "Redirect" */'@/views/sys/redirect/index.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */'@/components/layout/CommonLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '系统首页1',
        },
        component: () => import(/* webpackChunkName: "View1" */'@/views/View1.vue'),
      },
      {
        path: '/baseForm',
        name: 'baseForm',
        meta: {
          title: '基础表单',
        },
        component: () => import(/* webpackChunkName: "BaseForm" */'@/views/demo/form/BaseForm.vue'),
      },
      {
        path: '/baseTable',
        name: 'baseTable',
        meta: {
          title: '基础表格',
        },
        component: () => import(/* webpackChunkName: "BaseTable" */'@/views/demo/table/BaseTable.vue'),
      },
      {
        path: '/baseTabs',
        name: 'baseTabs',
        meta: {
          title: 'Tab选项卡',
        },
        component: () => import(/* webpackChunkName: "BaseTable" */'@/views/demo/tabs/Index.vue'),
      },
      {
        path: '/richEditor',
        name: 'richEditor',
        meta: {
          title: '富文本',
        },
        component: () => import(/* webpackChunkName: "RichEditor" */'@/views/demo/richEditor/Index.vue'),
      },

      {
        path: '/errorDemo',
        name: 'errorDemo',
        meta: {
          title: '模拟异常页',
        },
        component: () => import(/* webpackChunkName: "ErrorDemo" */'@/views/demo/error/ErrorDemo.vue'),
      },
      {
        path: '/draggerDialog',
        name: 'draggerDialog',
        meta: {
          title: '可拖拽Dialog',
        },
        component: () => import(/* webpackChunkName: "DraggerDialog" */'@/views/demo/draggable/DraggerDialog.vue'),
      },
      {
        path: '/draggable',
        name: 'draggable',
        meta: {
          title: '可拖拽Demo',
        },
        component: () => import(/* webpackChunkName: "Draggable" */'@/views/demo/draggable/Draggable.vue'),
      },
      {
        path: '/watermark',
        name: 'watermark',
        meta: {
          title: '水印',
        },
        component: () => import(/* webpackChunkName: "Watermark" */'@/views/demo/feature/Watermark.vue'),
      },
      {
        path: '/pageTabsDemo',
        name: 'pageTabsDemo',
        meta: {
          title: '标签页操作',
        },
        component: () => import(/* webpackChunkName: "PageTabsDemo" */'@/views/demo/feature/PageTabsDemo.vue'),
      },
      {
        path: '/intro',
        name: 'intro',
        meta: {
          title: '引导页',
        },
        component: () => import(/* webpackChunkName: "Intro" */'@/views/demo/intro/Intro.vue'),
      },
      {
        path: '/500',
        name: '500',
        meta: {
          title: '500',
        },
        component: () => import(/* webpackChunkName: "500" */'@/views/sys/error/500.vue'),
      },
      {
        path: '/403',
        name: '403',
        meta: {
          title: '403',
        },
        component: () => import(/* webpackChunkName: "403" */'@/views/sys/error/403.vue'),
      },
      {
        path: '/404',
        name: '404',
        meta: {
          title: '404',
        },
        component: () => import(/* webpackChunkName: "404" */'@/views/sys/error/404.vue'),
      },
      {
        path: '/networkError',
        name: 'networkError',
        meta: {
          title: '网络错误',
        },
        component: NetworkError,
      },

    ],

  },
];

export default routesList;
