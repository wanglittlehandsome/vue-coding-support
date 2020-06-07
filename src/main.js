import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);  // ant-design-vue
Vue.config.productionTip = false;
// Vue.prototype.$axios = axios;

// cancelToken中的cancel函数
// 在路由跳转时，若当前页面的数据量过大，而我们立即点击跳转下一页面，那么可能会出现，当前页面接口还在pending状态，页面已经跳到新页面，旧的请求依旧没有停止。
// 这将会十分损耗性能，这时我们应该先取消掉之前还没有获得相应的请求，再跳转页面
Vue.$httpRequestList = [];

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
