// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { WechatPlugin } from 'vux'
Vue.use(WechatPlugin)
console.log(Vue.wechat) // 可以直接访问 wx 对象。
Vue.config.productionTip = false
import {wechatUtil} from '@/util'
wechatUtil.setWechatConfig(window.location.href.split('#')[0])
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
