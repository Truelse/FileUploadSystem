import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
//import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';
import VCharts from 'v-charts'


Vue.use(VCharts)
// 将自动注册所有组件为全局组件dataV 大数据框架使用
import dataV from '@jiaminghi/data-view';

Vue.use(dataV)


Vue.config.productionTip = false;
Vue.use(ElementUI, {
    size: 'small'
});


//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next()
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
