<!--
 * @Author: wenzhenjin
 * @Date: 2021-04-09 14:50:26
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-22 16:26:35
 * @Description: 
-->
<template>
    <div class="tag-box">
        <!-- <transition-group  mode="out-in"> -->
        <transition-group name="tag">
            <el-tag v-for="(item, index) in $store.state.historyNavList" :key="index" class="tagWidth" closable @close="closeHandle(index)" @click="clickHandle(item.name)" effect="plain">{{ item.name }}</el-tag>
        </transition-group>
    </div>
</template>
<script>
import { defineComponent, getCurrentInstance, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    name: 'HistoryTag',
    setup() {
        const store = useStore()
        const closeHandle = (index) => {
            if (store.state.historyNavList.length <= 1) {
                return
            }
            store.state.historyNavList.splice(index, 1)
        }
        const clickHandle = (name) => {
            // console.log(name)
            // sessionStorage.setItem('NAV_TAG_NAME', name)
            console.log(sessionStorage.getItem('NAV_TAG_NAME'))
        }
        return { closeHandle, clickHandle }
    }
})
</script>

<style lang="less">
@import '@/styles/layout/historyTag/historyTag.less';
</style>
