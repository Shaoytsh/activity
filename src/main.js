// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import wx from 'weixin-js-sdk'
/* eslint-disable no-new */
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer) 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
