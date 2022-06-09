import Vue from 'vue'
import Router from "vue-router";

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Login = () => import('views/login/login')
const Register = () => import('views/register/register')

const C1 = () => import('views/category/ClidrenView/c1.vue')
const C2 = () => import('views/category/ClidrenView/c2.vue')
const C3 = () => import('views/category/ClidrenView/c3.vue')
const C4 = () => import('views/category/ClidrenView/c4.vue')
const C5 = () => import('views/category/ClidrenView/c5.vue')

//解决重复点击报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    children: [
      { path: '/', redirect: 'c1' },
      { path: 'c1', component: C1, name: 'c1' },
      { path: 'c2', component: C2, name: 'c2' },
      { path: 'c3', component: C3, name: 'c3' },
      { path: 'c4', component: C4, name: 'c4' },
      { path: 'c5', component: C5, name: 'c5' },
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      showNav: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      showNav: true
    }
  }
]

export default new Router({
  mode: 'history',
  routes
})
