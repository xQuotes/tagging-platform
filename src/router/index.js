import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = (resolve) => {
  import('@/views/login').then((module) => {
    resolve(module);
  })
}
const Register = (resolve) => {
  import('@/views/register').then((module) => {
    resolve(module);
  })
}
const Index = (resolve) => {
  import('@/views/index').then((module) => {
    resolve(module);
  })
}
const Home = (resolve) => {
  import('@/views/homepage/home').then((module) => {
    resolve(module);
  })
}
const Vedio = (resolve) => {
  import('@/views/homepage/vedio').then((module) => {
    resolve(module);
  })
}
const PageSplit = (resolve) => {
  import('@/views/pagesplit/pagesplit').then((module) => {
    resolve(module);
  })
}
const ColumnSplit = (resolve) => {
  import('@/views/columnsplit/columnsplit').then((module) => {
    resolve(module);
  })
}
const NotFound = (resolve) => {
  import('@/views/404').then((module) => {
    resolve(module);
  })
}
let routes = [
  {
    path:'/',
    component: Login,
    name: '登录'
  },
  {
    path:'/register',
    component: Register,
    name: '注册'
  },
  {
    path:'/platform',
    component: Index,
    name: '首页',
    redirect: '/home',
    children:[
      {
        path:'/home',
        component: Home,
      },
      {
        path:'/vedio',
        component: Vedio,
        name: '培训视频'
      },
    ]
  },
  {
    path:'/platform',
    component: Index,
    name: '页切分',
    redirect: '/pagesplit',
    children:[
      {
        path:'/pagesplit',
        component: PageSplit,
      }
    ]
  },
  {
    path:'/platform',
    component: Index,
    name: '列切分',
    redirect: '/columnsplit',
    children:[
      {
        path:'/columnsplit',
        component: ColumnSplit,
      }
    ]
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
  },
  {
    path: '*',
    redirect: { path: '/404' }
  }
]
const router = new VueRouter({
  routes
})
export default router;
