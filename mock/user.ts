/*
 * @Author: wenzhenjin
 * @Date: 2021-04-25 15:22:53
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-25 16:53:13
 * @Description:
 */

import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/getUser',
        method: 'get',
        response: () => {
            console.log('body>>>>>>>>')
            return {
                code: 0,
                message: 'ok',
                data: ['aa', 'bb']
            }
        }
    }
] as MockMethod[]
