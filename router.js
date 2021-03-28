import Vue from 'vue'
import Router from 'vue-router'
/*1. 导入登陆组件 */
import login from './components/login.vue'
/* 导入Home组件 */
import Home from './components/Home.vue'
import Home_User from './components/Home_User.vue'

import register from './components/register'

/*导入监察内容管理页面组件 */
import content from './components/Management/content.vue'

import monitoring from './components/Management/monitoring.vue'

import message from './components/User/message.vue'
import task from './components/User/task.vue'


Vue.use(Router)
//要把原来的export default new Router拆分开
const router =  new Router({
  routes: [
    { path: '/', redirect: '/login' },
    /* 3.访问斜线时自动定向到login */
    { path: '/login', component: login },
    /* 2.导入组件之后，在路由的规则数组中新增一个路由规则，
      由path指定路径,当访问/login这个地址时，通过component
      属性指定要展示的组件 */
    { path:'/register',component:register },

    { 
      path:'/Home', 
      component:Home,
      redirect:'/Monitoring_content_management',
      
      children:[
        {
          path:'/Monitoring_content_management',component:content
        },
        {
          path:'/Monitoring_management',component:monitoring
        }
      ]
      },
    
    { 
      path:'/Home_User', 
      component:Home_User,
      redirect:'/Personal_home_page',
      

      children:[
        {
          path:'/Personal_home_page',component:message
        },
        {
          path:'/The_task_list',component:task
        }
      ]

    }

  ]
})

//验证此处是application先把token关掉
//挂载路由守卫，（返回函数)
router.beforeEach((to,from,next) => {
//先做to.path判断，防止循环导致栈溢出
if (to.path === '/login') return next()
//获取token
const tokenStr = window.sessionStorage.getItem('token')
if (!tokenStr) return next('/login')
next()
})


export default router
