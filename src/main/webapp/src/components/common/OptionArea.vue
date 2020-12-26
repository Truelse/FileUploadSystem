<template>
     <dv-border-box-12 >
       <div class="optionList">
                 <dv-border-box-2 
            style="width: 120px; height: 50px; line-height: 50px; text-align:center;cursor:pointer">
            文件上传
          </dv-border-box-2>
                  <dv-border-box-2
            style="width: 120px; height: 50px; line-height: 50px; text-align:center;cursor:pointer">
            文件审核
          </dv-border-box-2>
                  <dv-border-box-2
            style="width: 120px; height: 50px; line-height: 50px; text-align:center;cursor:pointer">
            任务发布
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

    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    }
};
</script>
<style scoped>
.optionList{
       display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding:20px 0;
}
</style>
