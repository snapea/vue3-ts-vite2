<!--
 * @Author: wenzhenjin
 * @Date: 2021-04-07 17:11:08
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-23 14:08:25
 * @Description: 
-->
<template>
    <el-menu :default-active="defaultActive" :class="$store.state.navMenuCompleteShow ? '' : 'nav-menu'" @close="handleClose" :collapse="$store.state.navMenuCompleteShow" @select="seleAction" router>
        <!-- <el-submenu index="1">
            <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu> -->
        <el-submenu v-for="(item, index) in menuList" :key="index" index="#">
            <template #title>
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(value, i) in item.children" :key="i" :index="value.code">{{ value.name }}</el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'navMenu',
    setup() {
        const menuList = ref([
            {
                title: '导航一',
                icon: 'el-icon-location',
                children: [
                    {
                        name: '首页',
                        code: '/'
                    },
                    {
                        name: '登录',
                        code: '/login'
                    },
                    {
                        name: '产品管理',
                        code: 'productMangeList'
                    }
                ]
            },
            {
                title: '导航一',
                icon: 'el-icon-menu',
                children: [
                    {
                        name: '产品编辑器',
                        code: 'productMangeList'
                    },
                    {
                        name: '通知管理',
                        code: 'productMangeList'
                    },
                    {
                        name: '消息推送',
                        code: 'productMangeList'
                    }
                ]
            }
        ])
        const store = useStore()
        const router = useRouter()
        const defaultActive = ref('/')
        console.log(sessionStorage.getItem('NAV_TAG_NAME'))
        if (sessionStorage.getItem('NAV_TAG_NAME') == null) {
            sessionStorage.setItem('NAV_TAG_NAME', JSON.stringify(menuList.value[0].children[0]))
            store.dispatch('sendNavEle', menuList.value[0].children[0])
            defaultActive.value = '/'
        } else {
            store.dispatch('sendNavEle', JSON.parse(sessionStorage.getItem('NAV_TAG_NAME') as string))
            defaultActive.value = JSON.parse(sessionStorage.getItem('NAV_TAG_NAME') as string).code
        }
        const handleClose = (key: number, path: string) => {
            store.dispatch('sendNavMenuBlock')
            console.log(key)
            console.log(path)
        }
        const seleAction = (key: string, path: []) => {
            // const
            // console.log(key)
            let payload
            menuList.value.map((item) => {
                item.children.map((value, i) => {
                    if (value.code === key) {
                        payload = value
                    }
                })
            })
            store.dispatch('sendNavEle', payload)
            // console.log(store.state.historyNavList)

            sessionStorage.setItem('NAV_TAG_NAME', JSON.stringify(payload))
        }

        return { handleClose, seleAction, menuList, defaultActive }
    }
})
</script>

<style lang="less">
@import '@/styles/layout/navMenu/navMenu.less';
</style>
