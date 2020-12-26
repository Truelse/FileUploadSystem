<template>
  <dv-border-box-12>
    <div id="linesMap">
      <p>月上传份数</p>
      <ve-histogram :data="chartData" :extend="chartExtend" :colors="colors"></ve-histogram>
    </div>
  </dv-border-box-12>
</template>

<script>
  export default {
    name: 'RightChartArea',


    data() {
      this.chartExtend = {
        legend: {
          show: false,
          bottom: "bottom"
        },
        series: {
          barWidth: 20
        },
        xAxis: {
          //设置坐标轴字体颜色和宽度
          axisLine: {
            lineStyle: {
              color: "#fff",
            }
          }
        },
        yAxis: {
          type: 'value',
          //设置坐标轴字体颜色和宽度
          axisLine: {
            lineStyle: {
              color: "#fff",
            }
          }
        }

      };
      return {
        chartData: {
          columns: ['日期', '访问用户'],
          rows: [{
              '日期': '1/1',
              '访问用户': 1393,
            },
            {
              '日期': '1/2',
              '访问用户': 3530,
            },
            {
              '日期': '1/3',
              '访问用户': 2923,
            },
            {
              '日期': '1/4',
              '访问用户': 1723,
            },
            {
              '日期': '1/5',
              '访问用户': 3792,
            },
            {
              '日期': '1/6',
              '访问用户': 4593,
            },
            {
              '日期': '1/7',
              '访问用户': 4593,
            },
            {
              '日期': '1/8',
              '访问用户': 4593,
            },
            {
              '日期': '1/9',
              '访问用户': 4593,
            }

          ]
        },
        colors: ["#5893df"]
      }
    }
  }
</script>

<style lang="less">
  #linesMap {
    padding: 15px;
  }
</style>