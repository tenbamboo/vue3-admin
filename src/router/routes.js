
// const View2 = () => import('@/views/View2.vue');

const routesList = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */'@/views/common/Login.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */'@/views/base/CommonLayout.vue'),
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
        component: () => import(/* webpackChunkName: "BaseForm" */'@/views/form/BaseForm.vue'),
      },
      {
        path: '/baseTable',
        name: 'baseTable',
        meta: {
          title: '基础表格',
        },
        component: () => import(/* webpackChunkName: "BaseTable" */'@/views/table/BaseTable.vue'),
      },
      {
        path: '/baseTabs',
        name: 'baseTabs',
        meta: {
          title: 'Tab选项卡',
        },
        component: () => import(/* webpackChunkName: "BaseTable" */'@/views/tabs/Index.vue'),
      },
      {
        path: '/richEditor',
        name: 'richEditor',
        meta: {
          title: '富文本',
        },
        component: () => import(/* webpackChunkName: "RichEditor" */'@/views/richEditor/Index.vue'),
      },
      {
        path: '/500',
        name: '500',
        meta: {
          title: '500',
        },
        component: () => import(/* webpackChunkName: "500" */'@/views/error/500.vue'),
      },
      {
        path: '/403',
        name: '403',
        meta: {
          title: '403',
        },
        component: () => import(/* webpackChunkName: "403" */'@/views/error/403.vue'),
      },
      {
        path: '/404',
        name: '404',
        meta: {
          title: '404',
        },
        component: () => import(/* webpackChunkName: "404" */'@/views/error/404.vue'),
      },
      


      
    ],

  },
  // {
  //   path: '/view2',
  //   name: 'view2',
  //   component: View2,
  // },
];

export default routesList;
