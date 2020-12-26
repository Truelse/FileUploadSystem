<template>
  <dv-border-box-12>
    <div id="file-list">
      <div class="file-listItems">
        <dv-border-box-7 class="file-item">
          <p> 本月总上传</p>
          <span class="number">71,876</span>
        </dv-border-box-7>
        <dv-border-box-7 class="file-item">
                    <p> 待上传</p>
          <span class="number">71,876</span>
        </dv-border-box-7>
      </div>
      <div class="file-listItems">
        <dv-border-box-7 class="file-item">       
             <p> 未审核文件</p>
          <span class="number" style="color:red">71,876</span></dv-border-box-7>
        <dv-border-box-7 class="file-item">      
              <p> 入库文档</p>
          <span class="number">71,876</span></dv-border-box-7>
      </div>
    </div>
  </dv-border-box-12>
</template>

<script>
export default {
  name: 'leftfilearea'
}
</script>

<style lang="less">
#file-list {
    padding: 20px;
    .file-listItems {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .file-listItems:nth-child(2) {
        margin-top: 20px;
    }
    .file-item {
        width: 150px;
        height: 100px;
        box-sizing: border-box;
        padding: 20px;
        .number{
          font-size:32px;
          margin-top:10px
        }
    }
}
</style>
