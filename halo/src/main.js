import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = axios;

router.beforeEach((to,from,next)=>{
  const role=localStorage.getItem("ms_username");
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
