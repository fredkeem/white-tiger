import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Select from '@/components/Select'
import Payment from '@/components/Payment'
import Feed from '@/components/Feed'
import Details from '@/components/Details'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/select',
      name: 'select',
      component: Select
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/details',
      name: 'details',
      component: Details
    }
  ]
})

export default router