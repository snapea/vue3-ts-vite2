<!--
 * @Author: wenzhenjin
 * @Date: 2021-03-30 17:53:12
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-25 16:52:57
 * @Description: 
-->
<template>
    <div>
        <h1>Hello Login</h1>
        <el-button @click="handleLogin">确认</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import http from '../../http/axios'
import axios from 'axios'

export default defineComponent({
    name: 'Login',
    // components: {
    //   HelloWorld
    // }
    setup() {
      
      fetch('/api/getUser').then(res => {
        console.log(res)
      })

        async function handleLogin() {
            console.log('click comfirm Btn')
            // const result = await http.get('/api/getRoleById', {})
            // console.log(result)
            axios.get('/api/getUser').then(res => {
              console.log(res)
            })
        }
        return {
            handleLogin
        }
    }
})
</script>

<style lang="less">
// @import './styles/index.less';
@import '/src/styles/index.less';
</style>
