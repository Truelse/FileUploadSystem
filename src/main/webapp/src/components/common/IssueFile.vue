<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <div class="content">

<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>任务发布</span>
  </div>
  <el-form ref="form" :model="form" label-width="180px"
                  style="width:50%">
  <el-form-item label="任务名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="部门">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="任务内容">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
    <el-form-item label="文件拖拽区域">
<el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
</el-upload> 
 </el-form-item>
     <el-form-item >
    <el-button>重置</el-button>
  <el-button type="primary">发布</el-button>
    <el-button type="primary">保存</el-button>

 </el-form-item>
</el-form>
</el-card>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import bus from './bus';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false,
          form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
        };
    },
    components: {
        vHead,
        vSidebar,
    },
    created() {
        bus.$on('collapse-content', msg =>   {
            this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
