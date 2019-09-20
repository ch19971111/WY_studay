import Vue from 'vue'
import Router from 'vue-router';
import { Hash } from 'crypto';

Vue.use(Router)
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Account from './pages/account/Account'
import Index  from './pages/index/Index'
import Search from './pages/search/Search'
import Category from './pages/category/Category'
import Details from './pages/details/Details'

const router = new Router({
  mode:'hash',
  routes:[
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      component:Index,
      redirect:'/index/home',
      children:[
        {
          path:'home',
          component:Home,
        },
        {
          path:'profile',
          component:Profile
        },
        {
          path:'account',
          component:Account
        }
      ]
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/category/:id',
      component:Category
    },
    {
      path:'/details/:id',
      component:Details
    }
  ]
})
export default router
