<!--
 * @Author: wenzhenjin
 * @Date: 2021-04-02 14:21:16
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-21 16:48:56
 * @Description: 
-->
<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
            <template #title>我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
                <template #title>选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'NavBar',
    setup() {
        const store = useStore()
        // const handleSelect = (index, path) => {
        //     console.log(index)
        //     console.log(path)
        // }
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

<style lang="less"></style>
