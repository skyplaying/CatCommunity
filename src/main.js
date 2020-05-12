import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'
import store from './store'
import {
	post,
	get
} from './api/http'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
// import './mock'

import './utils/filter' // global filter
// 引入layui样式
import './layui/css/layui.css'
import './layui/css/global.css'
// import ''
import './layui/layui.js'
Vue.use(Antd)
Vue.prototype.$post = post
Vue.prototype.$get = get

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')