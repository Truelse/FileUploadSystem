import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
          path: '/main',
          component: () => import('../components/page/Main.vue'),
          meta: { title: '主页' }
      },
        {
            path: '/UploadFile',
            component: () => import(/* webpackChunkName: "login" */ '../components/common/UploadFile.vue'),
            meta: { title: '文件上传' }
        },
        {
          path: '/AuditFile',
          component: () => import(/* webpackChunkName: "login" */ '../components/common/AuditFile.vue'),
          meta: { title: '文件审核' }
        },
        {
          path: '/IssueFile',
          component: () => import(/* webpackChunkName: "login" */ '../components/common/IssueFile.vue'),
          meta: { title: '任务发布' }
        },
        {
          path: '',
          redirect: '/main'
      },
        {
            path: '*',
            redirect: '/main'
        }
    ]
});
