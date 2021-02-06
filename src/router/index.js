import Vue from 'vue'
import Router from 'vue-router'
import Activity from '@/components/Activity'

Vue.use(Router)

export default new Router({
  beforeRouteEnter(to, from, next) {
    if (from.name == 'confirm') {
    to.meta.isBack = true;
    }
    next();
    },
  routes: [
    {
      path: '/',
      name: 'Activity',
      component: Activity,
      meta: {
        keepAlive: false, //此组件不需要被缓存
        isBack: false, //用于判断上一个页面是哪个
        }
    }
    
  ]
})
