/*
 * @Author: wenzhenjin
 * @Date: 2021-03-30 17:53:12
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-08 11:21:18
 * @Description:
 */
// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)
app.mount('#app')
