import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/register'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/detail/detail'),
  },
  /**
   * 帖子区域
   */
  {
    path: '/posts/addPost',
    name: 'addPost', //发帖
    component: () => import('../views/posts/addPost'),
  },
  {
    path: '/posts/myPosts',
    name: 'myPosts', //我发的帖子
    component: () => import('../views/posts/myPosts'),
  },
  {
    path: '/posts/myCollections',
    name: 'myCollections', //我收藏的帖子
    component: () => import('../views/posts/myCollections'),
  },
  /**
   * 用户区域
   */
  {
    path: '/user/set',
    name: 'Set',
    component: () => import('../views/userCenter/set'),
  },
  {
    path: '/user/message',
    name: 'message',
    component: () => import('../views/userCenter/myMessage'),
  },
  {
    path: '/user/home',
    name: 'userDes',
    component: () => import('../views/userCenter/userDes'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = sessionStorage.getItem('login') // 判断是否登录，本地存储有用户数据则视为已经登录
  // 未登录状态；当路由到 nextRoute 指定页时，跳转至 UserLogIn
  // 检测是否登录的页面
  // if (!isLogin) {
  //   // 如果未登录（本地存储无用户数据），并且要跳到登录页面
  //   if (from.name === 'Login') {
  //     next('/')
  //     return
  //   }
  //   // 登录后，跳到到当前页面
  //   router.push({
  //     name: 'Login',
  //     params: { redirect: to.fullPath },
  //   })
  // }
  // // 已登录状态；当路由到LogIn 时，跳转至 Home
  // if (to.name === 'Login') {
  //   if (isLogin) {
  //     next('/')
  //     return
  //   }
  // }
  next() // 必须使用 next ,执行效果依赖 next 方法的调用参数
})
export default router
