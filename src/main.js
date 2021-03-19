import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import echarts from 'echarts'

// 解决无法一次登陆
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
        if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
        return originalPush.call(this, location).catch(err => err)
    }
    // 结束


Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.$http = axios

Vue.prototype.$echarts = echarts


axios.defaults.baseURL = ''



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')