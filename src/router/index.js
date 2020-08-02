import VueRouter from 'vue-router'
import Vue from 'vue';

// 选择路由懒加载的方式
const Home = () => import('../views/home/Home.vue')
const Message = () => import('../views/message/Message.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Category = () => import('../views/category/Category.vue')
const Detail = () => import('../views/detail/Detail.vue')
const Account = () => import('../views/account/Account.vue')
const Search = () => import('../views/search/Search.vue') 

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [
  { //设置默认路径
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/message',
    component: Message,
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/tosearch',
    component: Search
  }
]
const router = new VueRouter({
  //配置路径与组件对应关系
  routes,
  //默认为hash模式，修改为history模式
  mode: 'history'
})

export default router