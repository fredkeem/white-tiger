import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})

export default router