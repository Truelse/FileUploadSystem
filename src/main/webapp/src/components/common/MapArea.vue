<template>
  <dv-border-box-12>
    <div id="map" style="height:740px; width:900px">

    </div>
  </dv-border-box-12>
</template>

<script>
  import echart from "echarts"
  import $ from "jquery"
  import dataJson from "../../static/jiulongpo.json"
  export default {
    name: 'maparea',
    data() {
      return {}
    },

    mounted() {
      //定义数量
      var myData = [

        {
          name: '谢家湾小学',
          value: [29.529575,106.480906,90]
        },
      ]
      var myChart = echart.init(document.getElementById("map"));
      console.log(dataJson)
      echart.registerMap('region', dataJson);
      var option = {  
           
        series: [
          {
            name: '县级地图',
            type: 'map',
            roam: true,
            left: "center",
            top: "center",
            geoIndex: 0,
            zoom: 1.2, //默认显示级别
            // scaleLimit:{min:0.1,max:3}, // 缩放级别
            map: 'region',
            itemStyle: {
              color: "#fff",
              normal: {
                areaColor: '#45c8ff',
                borderColor: '#fff',
                color: "#fff"
              },
              emphasis: {
                areaColor: '#00aeee',
                color: "#fff"
              }
            },
            // itemStyle:{
            //     emphasis:{label:{show:true}}
            // },
            label: {
              position: ['50%', '50%'],
              normal: {
                show: true,
                color: "#fff",
              },
              color: "#fff",
              emphasis: {
                show: false
              }
            },
            data:[12,20]
          },
          {
            name: '数量', // series名称
  	        backgroundColor: '#404a59',
            type: 'scatter',
            coordinateSystem: 'geo',
            geoIndex:0,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                color: '#F62157', // 标志颜色
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data: myData // series坐标系类型
          }
        ]
      };
      myChart.setOption(option);

    }
  }
</script>

<style lang="less">

</style>