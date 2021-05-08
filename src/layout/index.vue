<!--
 * @Author: wenzhenjin
 * @Date: 2021-04-07 11:47:08
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-09 15:28:12
 * @Description: 
-->
<template>
    <div class="flex-row">
        <NavMenu />
        <div class="flex-column width-full">
            <Header />
            <HistoryTag />
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
// import Header from './header/header.vue'
import Header from '@/layout/header/header.vue'
import NavMenu from '@/layout/navMenu/navMenu.vue'
import HistoryTag from '@/layout/historyTag/historyTag.vue'

export default defineComponent({
    name: 'App',
    components: {
        Header,
        NavMenu,
        HistoryTag
    },
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

</style>
