<template>
  <dv-border-box-12>
    <div class="optionList">
      <dv-border-box-2 style="width: 120px; height: 50px; line-height: 50px; text-align:center;cursor:pointer">
        <span class="option" @click="uploadFile()">文件上传 </span>
      </dv-border-box-2>
      <dv-border-box-2 style="width: 120px; height: 50px; line-height: 50px; text-align:center;cursor:pointer">
        <span class="option" @click="auditFile()">文件审核 </span>
      </dv-border-box-2>
      <dv-border-box-2 style="width: 120px; height: 50px; line-height: 50px; text-align:center;cursor:pointer">
        <span class="option" @click="issueFile()">任务发布 </span>
      </dv-border-box-2>
    </div>

  </dv-border-box-12>
</template>
<script>
  import bus from '../common/bus';
  export default {
    data() {
      return {
        collapse: false,
        fullscreen: false,
        hidden: false,
        name: 'linxin',
        message: 2
      };
    },
    computed: {
      username() {
        let username = localStorage.getItem('ms_username');
        return username ? username : this.name;
      }
    },
    methods: {
      //文件上传
      uploadFile() {
        console.log("xx")

        this.$router.push('/UploadFile');
        console.log("xx")
      },
      //文件审核
      auditFile() {
        console.log("xx")
        this.$router.push('/AuditFile');


      },
      //任务发布
      issueFile() {
        this.$router.push('/IssueFile');

      }
    },
    mounted() {
      if (document.body.clientWidth < 1500) {
        this.collapseChage();
      }
    }
  };
</script>
<style scoped lang="less">
  .optionList {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 0;
    .option {
      display: block;
    }
  }
</style>