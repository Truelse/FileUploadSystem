<template>
<div>
  <dv-border-box-12>
    <div class="chartsMap">
      <p>
        重要文件
      </P> 
        <ve-pie :data="chartData"  :extend="chartExtend" height='220px'  ></ve-pie>
    </div>
  </dv-border-box-12>
    <dv-border-box-12>
      <div class="chartsMap">
      <p>
        一般文件
      </P> 
        <ve-pie :data="chartData" :extend="chartExtend" height='220px' ></ve-pie>
    </div>  
  </dv-border-box-12>
</div>  
</template>

<script>
export default {

  name: 'leftchartarea',
      data () {
      this.chartExtend = {
      legend: {
      orient : 'vertical',
        top:50,
        right:40,
        textStyle:{
          color:"#fff"
        }
      },
      series: {
name: "流量占比分布",
type: "pie",
radius : '70%',
center: ["35%", "100"], 　　　　//这个属性调整图像的位置
label: { //去除饼图的指示折线
normal: {
show: false,
position: 'inside',
formatter:"{b}:{d}%"
},
},
},
    };
      return {
        chartData: {
          columns: ['name', 'number','已完成'],
          rows: [
            { 'name': '完成', 'number': 1393, },
            { 'name': '待审核', 'number': 3530, },
            { 'name': '已完成', 'number': 3530, },

          ]
        }
      }
    }
  }
</script>

<style lang="less">
.chartsMap{
    padding: 20px;
}
</style>
