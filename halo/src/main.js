import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = axios;
axios.defaults.withCredentials=true;
Vue.prototype.$rootUrl = '/list';

router.beforeEach((to,from,next)=>{
  const role=localStorage.getItem("ms_userId");
  if(!role&&to.path!=='/login'){
    next({ path: '/login' });
  }
  else {
    next();
  }
})

new Vue({

  router,
  render: h => h(App)
}).$mount('#app')
