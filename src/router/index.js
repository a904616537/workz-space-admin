import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/customer',
    component: Layout,
    redirect: '/customer/table',
    name: 'Customer',
    meta: { title: 'Client Management', icon: 'example' },
    children: [
      {
        path: 'customer',
        name: 'Information',
        component: () => import('@/views/customer/index'),
        meta: { title: 'Client Information', icon: 'table' }
      },
      {
        path: 'wish',
        name: 'Wish',
        component: () => import('@/views/wish/index'),
        meta: { title: 'Client Wishlist', icon: 'tree' }
      }
    ]
  },

  {
    path: '/provider',
    component: Layout,
    redirect: '/provider',
    children: [{
      path: 'provider',
      name: 'Provider',
      component: ()=> import('@/views/provider/index'),
      meta: {title: 'Workspace Provider', icon: 'user' }
    }]
  },

  {
    path: '/space',
    component: Layout,
    redirect: '/space',
    children: [{
      path: 'space',
      name: 'Space',
      component: ()=> import('@/views/space/index'),
      meta: {title: 'Workspace Management', icon: 'nested' }
    }]
  },

  {
    path: '/update',
    component: Layout,
    redirect: '/update',
    children: [{
      path: 'update',
      name: 'Update',
      component: ()=> import('@/views/update/index'),
      meta: {title: 'Workspace Update Requests', icon: 'form' }
    }]
  },


  {
    path: '/admin',
    component: Layout,
    redirect: '/admin',
    children: [{
      path: 'admin',
      name: 'Admin',
      component: ()=> import('@/views/admin/index'),
      meta: {title: 'Admin', icon: 'user' }
    }]
  },


  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
