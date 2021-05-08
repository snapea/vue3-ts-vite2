<!--
 * @Author: wenzhenjin
 * @Date: 2021-03-30 17:53:12
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-09 14:24:07
 * @Description: 
-->
<template>
    <div class="rootdiv">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
    name: 'App',
    setup() {
        // const { ctx } = getCurrentInstance()
        // async function handleLogin() {
        //     console.log(ctx)
        //     ctx.$router.push('/about')
        //     console.log('click comfirm Btn')
        // }
        // return {
        //     Login: handleLogin
        // }
    }
})
</script>

<style lang="less">
@import './styles/config.less';
</style>
