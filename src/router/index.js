import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = (resolve) => {
  import('@/views/login').then((module) => {
    resolve(module);
  })
}
let routes = [
  {
    path:'/',
    component: Login,
    name: '登录'
  },
]
const router = new VueRouter({
  routes
})
export default router;
