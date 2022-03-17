/* eslint-disable standard/object-curly-even-spacing */
// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '@/pages/Msite/Msite.vue'
import Order from '@/pages/Order/Order.vue'
import Profile from '@/pages/Profile/Profile.vue'
import Search from '@/pages/Search/Search.vue'
import Login from '@/pages/Login/Login.vue'

// 挂载插件
Vue.use(VueRouter)

// 所有路由
const routes = [
  {path: '/', redirerct: '/msite'},
  {path: '/msite', component: Msite, meta: {footIsShow: true} },
  {path: '/order', component: Order, meta: {footIsShow: true} },
  {path: '/profile', component: Profile, meta: {footIsShow: true} },
  {path: '/search', component: Search, meta: {footIsShow: true} },
  {path: '/login', component: Login}
]

export default new VueRouter({
  routes
})
