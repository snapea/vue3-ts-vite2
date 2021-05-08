<!--
 * @Author: wenzhenjin
 * @Date: 2021-04-07 15:43:58
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-09 18:23:56
 * @Description: 
-->
<template>
    <el-menu :default-active="active" class="header-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="handlePutNavAction"><i :class="$store.state.navMenuCompleteShow ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i></el-menu-item>
        <el-submenu index="2" class="float-right">
            <template #title>我的工作台</template>
            <el-menu-item index="2-1">username</el-menu-item>
            <el-menu-item index="2-2" @click="cancelLogin">退出登陆</el-menu-item>
        </el-submenu>

        <!-- <el-menu-item class="float-right" index="4">订单管理</el-menu-item> -->
    </el-menu>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'Header',
    setup() {
        const store = useStore()
        const active = ref('1')
        const handleSelect = (key: number, path: string) => {}

        const handlePutNavAction = () => {
            store.dispatch('sendNavMenuBlock')
        }
        const cancelLogin = () => {
            console.log('cancel login')
        }

        return { handleSelect, handlePutNavAction, cancelLogin, active }
    }
})
</script>

<style lang="less">
@import '@/styles/layout/header/header.less';
</style>
