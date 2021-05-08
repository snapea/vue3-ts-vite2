<!--
 * @Author: wenzhenjin
 * @Date: 2021-04-06 16:33:16
 * @LastEditors: wenzhenjin
 * @LastEditTime: 2021-04-23 14:52:26
 * @Description: 
-->
<template>
    <div>
        <div ref="myChartEle" class="chart">aaaa</div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
    name: 'Login',
    // components: {
    //   HelloWorld
    // }
    setup() {
        const myChartEle = ref(null)

        onMounted(() => {
            // console.log(myChartEle.value)
            const myChart = echarts.init((myChartEle.value as unknown) as HTMLElement)
            myChart.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            })
        })
        async function handleLogin() {
            console.log('click comfirm Btn')
        }
        return {
            Login: handleLogin,
            myChartEle
        }
    }
})
</script>

<style lang="less">
// @import './styles/index.less';
@import '/src/styles/index.less';
.chart{
  width: 50vw;
  height: 40vw;
}
</style>
