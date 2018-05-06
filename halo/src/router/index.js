import Vue from 'vue';
import Router from 'vue-router';
import Axios from 'axios'
Vue.use(Router);
Vue.prototype.$ajax = Axios

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: '自述页面' },
      children: [{
        path: '/dashboard',
        component: resolve => require(['../components/page/DashBoard.vue'], resolve),
        meta: { title: '系统首页' }
      }
      ]
    },
    {
      path:'/login',
      component: resolve => require(['../components/page/Login.vue'], resolve),
    },
    {
      path:'/404',
      component: resolve => require(['../components/page/404.vue'], resolve),
    },
    {
      path:'*',
      redirect:'/404'
    }
  ]
})
