<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <v-tags></v-tags>
            <div class="content">

<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>文件审查</span>
  </div>
  <el-form ref="form" :model="form" label-width="80px"
                 :inline="true"  >
  <el-form-item label="条件1">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="条件2">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>

     <el-form-item >
    <el-button>重置</el-button>
  <el-button type="primary">查询</el-button>
 </el-form-item>
   <el-table
    :data="tableData"
    border
    :fit="false"
    >
    <el-table-column
      prop="date"
      label="文件名"
      width="300"
      align="center"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="上传部门"
      align="center"
      width="300">
    </el-table-column>
    <el-table-column
      prop="province"
      label="上传人"
      align="center"
      width="200">
    </el-table-column>
    <el-table-column
      prop="city"
      label="上传时间"
      align="center"
      width="200">
    </el-table-column>
    <el-table-column
      prop="address"
      label="查看"
      align="center"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="状态"
      align="center"
      width="200">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="审查"
      align="center"
      width="80">
      <template slot-scope="scope">
        <el-button @click="dialogVisible = true"  type="primary" >审核</el-button>
      </template>
    </el-table-column>
  </el-table>
  
          <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      style="text-align: right;margin-top:20px"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>

</el-form>
</el-card>
            </div>
        </div>
        <el-dialog
  title="文件审查"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
    <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
        xxx
  </el-form-item>
      <el-form-item label="活动名称">
        xxx
  </el-form-item>
      <el-form-item label="活动名称">
        xxx
  </el-form-item>
      <el-form-item label="活动名称">
        xxx
  </el-form-item>
      <el-form-item label="活动名称">
        xxx
  </el-form-item>
        <el-form-item label="原因">
        <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
  </el-form-item>
  </el-form>

  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      <el-button type="danger">不通过</el-button>
    <el-button @click="dialogVisible = false">取 消</el-button>

  </span>
</el-dialog>
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
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }],
        dialogVisible: false

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
