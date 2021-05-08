/*
 * @Author: wenzhenjin
 * @Date: 2021-04-01 11:28:43
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-08 16:55:17
 * @Description:
 */

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import userManageRoute from './notAuthModules/userManager'

// let constantModules: Array<RouteRecordRaw> = []

// export const constantRoutes: Array<RouteRecordRaw> = userManageRoute
const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../layout/index.vue'),
        children: [
            { path: '/', component: () => import('../views/home/home.vue') },
            { path: '/login', component: () => import('../views/login/login.vue') }
        ]
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export default router
