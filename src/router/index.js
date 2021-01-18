import Vue from 'vue'
import Router from 'vue-router'
import Activity from '@/components/Activity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Activity',
      component: Activity
    }
  ]
})
