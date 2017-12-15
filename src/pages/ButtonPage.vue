<template>
  <div class="">
    <el-container>
      <el-row>
        <el-col>
          <el-button type="primary">主要的按钮</el-button>
          <el-button type="success">成功按钮</el-button>

          <el-button type="success" disabled>成功按钮</el-button>
          <el-button type="success">成功按钮</el-button>
        </el-col>
      </el-row>
    </el-container>

    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary" icon="el-icon-arrow-right">下一页</el-button>
    </el-button-group>

    <div>
      <el-button type="danger" :loading="true" >加载中</el-button>
      <el-button type="primary" size="medium" plain="true" round="true" autofocus="true">按钮</el-button>
      <el-button type="primary" size="small">按钮</el-button>
      <el-button type="primary" size="mini">按钮</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name:"",
    data() {
      return {

      };
    },
  }
</script>

<style scoped>

</style>
