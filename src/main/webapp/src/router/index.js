import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
          path: '/main',
          component: () => import('../components/page/Main.vue'),
          meta: { title: '主页' }
      },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "homew" */ '../components/common/Homew.vue'),
            meta: { title: '桌面' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Dashboard.vue'),
                    meta: { title: '自定义图标' }
                }
            ]
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
