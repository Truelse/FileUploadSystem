<template>
  <dv-border-box-12>
    <div id="map">
      <ve-map :data="chartData0" :settings="chartSettings22" height='740px' width='600px' style='margin:0px auto;'
        :grid="grid" :legend-visible='false'></ve-map>
    </div>
  </dv-border-box-12>
</template>

<script>
  export default {
    name: 'maparea',
    data() {
      this.chartSettings22 = {
        position: 'province/chongqing', //位置  默认china  填写省市 要带province
        labelMap: {
          'people': '人口' //修改指标名称
        },
        itemStyle: {
          normal: { //不选中样式
            borderColor: '#E6EFFF', //背景颜色
            areaColor: '#0E7DEB',
            opacity: 0.2
          },
          emphasis: { //选中样式
            areaColor: "#6A9FFF",
            color: '#fff'
          }
        },
        label: { //文本设置
          show: true,
          fontSize: 8,
          fontWeight: 300,
          color: '#fff'
        },
      }
      return {
        chartData0: {
          columns: ['位置', 'people'],
          rows: [{
              '位置': '南阳市',
              'people': 123
            },
            {
              '位置': '洛阳市',
              'people': 1223
            },
            {
              '位置': '周口市',
              'people': 2123
            },
            {
              '位置': '商丘市',
              'people': 4123
            },
            {
              '位置': '信阳市',
              'people': 8123
            },
            {
              '位置': '三门峡市',
              'people': 8123
            }
          ]
        },
      }
    }
  }
</script>

<style lang="less">

</style>