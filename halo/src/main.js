import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
