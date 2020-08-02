import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index';
import toast from '@/components/common/toast'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(toast)

//给Vue原型添加$bus事件总线
Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

