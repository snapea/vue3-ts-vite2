/*
 * @Author: wenzhenjin
 * @Date: 2021-04-02 10:12:36
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-23 18:07:52
 * @Description:
 */

import { RouteRecordRaw } from 'vue-router'
// '@/view/Login/login.vue'

const userManageRoute: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        component: () => {'/views/login/login.vue'}
    }
]
console.log(userManageRoute)

export default userManageRoute
