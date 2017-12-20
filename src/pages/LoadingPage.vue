<template>
  <div class="container">
    <section class="section" hidden>
      <header class="header">使用指令 ，v-loading正在加载中</header>
      <el-table :data="tableData" v-loading="isLoading">
        <el-table-column label="日期" min-width="100" prop="date"></el-table-column>
        <el-table-column label="姓名" min-width="100" prop="name"></el-table-column>
        <el-table-column label="地址" min-width="200" prop="address"></el-table-column>
      </el-table>
      
    </section>

    <section class="section" hidden>
      <header class="header">使用自定义的加载文案、图标、背景</header>
      <el-table :data="tableData" 
      v-loading="isLoading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0,0,0,0.8)">
        <el-table-column label="日期" min-width="100" prop="date"></el-table-column>
        <el-table-column label="姓名" min-width="100" prop="name"></el-table-column>
        <el-table-column label="地址" min-width="200" prop="address"></el-table-column>
      </el-table>
      
    </section>

    <section class="section">
      <header class="header">
        整个页面加载   lock锁定滚动
        1、指令方式: v-loading.fullscreen.lock=""
        <br>
      </header>
      <el-button type="primary" 
      @click="openFullScreen"
      v-loading.fullscreen.lock="isFullLoading">指令方式</el-button>
      <el-button type="danger"  @click="openFullScreen2">服务方式</el-button>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
         tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        isLoading:true, //默认正在加载中
        isFullLoading:false,
      };
    },
    methods:{
      openFullScreen(){
        //指令方式 页面加载中
        this.isFullLoading=true;
        setTimeout(()=>{
          this.isFullLoading=false;
        },2000)

      },
      openFullScreen2(){
        const loading=this.$loading({
          lock:true,
          text:"正在拼命加载中",
          spinner:"el-icon-loading",
          background:'rgba(0,0,0,0.7)'
        
        });
        setTimeout(()=>{
          loading.close();

        },2000);
      }
    }
  };
</script>

<style scoped>
.container{ width: 1000px; margin: 0 auto;}
.section{ margin-top: 20px;}
.header{ line-height: 40px;}
</style>
