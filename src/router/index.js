import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store/index'

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
const Video = (resolve) => {
  import('@/views/homepage/video').then((module) => {
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
const fontsplit = (resolve) => {
  import('@/views/fontsplit/fontsplit').then((module) => {
    resolve(module);
  })
}

const textSplit = (resolve) => {
  import('@/views/textSplit/textSplit').then((module) => {
    resolve(module);
  })
}
const NotFound = (resolve) => {
  import('@/views/404').then((module) => {
    resolve(module);
  })
}
const Task = (resolve) => {
  import('@/views/task/taskmanage').then((module) => {
    resolve(module);
  })
}
const Member = (resolve) => {
  import('@/views/member/membermanage').then((module) => {
    resolve(module);
  })
}
let routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        name: '首页',
        component: Home,
      },
      {
        path: 'video',
        name: '培训视频',

        component: Video
      },
      {
        path: 'pagesplit',
        name: '页切分',

        component: PageSplit,
      },
      {
        path: 'columnsplit',
        name: '列切分',

        component: ColumnSplit,
      },
      {
        path: 'fontsplit',
        name: '字框切分标注',

        component: fontsplit,
      },
      {
        path: 'textsplit',
        name: '文本识别标注页',
        component: textSplit,
      },
      {
        path: 'taskmanage',
        name: '任务管理',
        component: Task,
      },
      {
        path: 'membermanage',
        name: '人员管理',

        component: Member,
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: '登录'
  },
  {
    path: '/register',
    component: Register,
    name: '注册'
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
  },
  {
    path: '*',
    redirect: { path: '/404' }
  }
]
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  // 权限判断

  let needCheckLoginPages = [
    // 需要判断的路径
    '登录',
    '注册',
    '404'
  ]

  const needAuth = !needCheckLoginPages.find((value) => {
    return value == to.name
  })
  const isLogin = sessionStorage.userInfo
  // 判断路径不在数组里 并且 没有登陆
  if (!isLogin && needAuth) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  } else if (isLogin && !needAuth) {
    next({
      path: '/home'
    })
  } else {
    next()
  }
})
export default router;
