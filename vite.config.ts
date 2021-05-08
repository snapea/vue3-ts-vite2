/*
 * @Author: wenzhenjin
 * @Date: 2021-03-30 17:53:12
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-25 17:54:29
 * @Description:
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'

// import { resolve } from 'path'
import path from 'path'

export default defineConfig({
    // plugins: [vue(), viteMockServe({ supportTs: true })],
    plugins: [
        vue(),
        viteMockServe({
            // mockPath: 'mock',
            logger: true
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }

    //     server: {
    //         // 配置代理
    //         // proxy: {
    //         //     '/api': {
    //         //         target: 'http://jsonplaceholder.typicode.com',
    //         //         changeOrigin: true,
    //         //         rewrite: (path) => path.replace(/^\/api/, '')
    //         //     }
    //         // }
    //     }
})

// export default ({ command }: ConfigEnv): UserConfigExport => {
//     return {
//         plugins: [
//             vue(),
//             viteMockServe({
//                 // default
//                 mockPath: 'mock',
//                 localEnabled: command === 'serve'
//             })
//         ],
//         resolve: {
//             alias: {
//                 '@': path.resolve(__dirname, 'src')
//             }
//         }
//     }
// }
