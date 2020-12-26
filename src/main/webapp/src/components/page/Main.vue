<template>
  <div id="data-view">
    <dv-full-screen-container>
      <MainHeader />
      <div class="main-content">
        <div class="main-left">
          <LeftFilesArea />
          <LeftChartArea />
        </div>
        <div class="main-middle">
          <OptionArea />
          <MapArea />
        </div>
        <div class="main-right">
          <RightChartArea />
          <!--表格-->
          <TableArea />
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
  import MainHeader from '../common/MainHeader';
  import FilesArea from '../common/FilesArea';
  import LeftFilesArea from '../common/LeftFilesArea';
  import LeftChartArea from '../common/LeftChartArea';
  import TableArea from '../common/TableArea';
  import RightChartArea from '../common/RightChartArea';
  import OptionArea from '../common/OptionArea';
  import MapArea from '../common/MapArea';




  export default {
    name: 'DataView',
    components: {
      MainHeader,
      FilesArea,
      LeftFilesArea,
      LeftChartArea,
      TableArea,
      RightChartArea,
      OptionArea,
      MapArea
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less">
  #data-view {
    width: 100%;
    height: 100%;
    background-color: #030409;
    color: #fff;

    #dv-full-screen-container {
      background-image: url(../img/bg.png);
      background-size: 100% 100%;
      box-shadow: 0 0 3px blue;
      display: flex;
      flex-direction: column;
    }

    .main-content {
      display: flex;
      flex-direction: row;
    }

    .main-left {
      flex: 3;
      padding: 0 20px;
    }

    .main-middle {
      flex: 6;
      padding: 0 20px;
    }

    .main-right {
      flex: 3;
      padding: 0 20px;
    }

    .dv-border-box-12 .dv-border-svg-container {
      width: inherit;
    }

    .dv-border-box-12 {
      height: inherit;
    }
  }
</style>