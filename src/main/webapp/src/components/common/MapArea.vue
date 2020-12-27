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
      var myData = [{
          name: '格力电器',
          value: [106.45762, 29.507393]
        },
        {
          name: '谢家湾小学2',
          value: [106.480906, 29.529575]
        },
        {
          name: '民安华福',
          value: [106.451943, 29.438499]
        },
        {
          name: '西彭',
          value: [106.333794, 29.304433]
        },

      ]
      //定义值
      var myValue = [{
          name: '格力电器',
          num: 22
        },
        {
          name: '谢家湾小学2',
          num: 33
        },
        {
          name: '民安华福',
          num: 44
        },
        {
          name: '西彭',
          num: 55
        },
      ]
      var myChart = echart.init(document.getElementById("map"));
      echart.registerMap('region', dataJson);
      var option = {
        geo: {
          show: true,
          map: 'region',
          nameMap: "region",
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            color: "#fff",
            show:false,
            normal: {
              areaColor: '#00aeee',
              borderColor: '#fff',
              color: "#fff",
               show:false
            },
            emphasis: {
              areaColor: '#00aeee',
              color: "#fff",
              show:false
            }
          },
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
          zoom: 1.2
        },
        series: [{
          name: '数量', // series名称
          backgroundColor: '#404a59',
          type: 'scatter',
          coordinateSystem: 'geo',
          geoIndex: 0,
          label: {
            normal: {
              formatter: function (b) {
                console.log(b.name)
                for (var i = 0; i < myValue.length; i++) {
                  if (b.name == myValue[i].name) {
                    return b.name + myValue[i].num + '个'
                  }
                }
              },
              position: 'right',
              color: '#F62157', // 标志颜色
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data: myData // series坐标系类型
        }]
      };
      myChart.setOption(option);

    }
  }
</script>

<style lang="less">

</style>