<template>
  <div class="container">
    <section class="section">
      <header class="header"> 基础用法： slot="dropdown"</header>
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单 <i class="el-icon-arrow-down el-icon-right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>北京</el-dropdown-item>
          <el-dropdown-item>上海</el-dropdown-item>
          <el-dropdown-item>广州</el-dropdown-item>
          <el-dropdown-item divided>深圳</el-dropdown-item>
          <el-dropdown-item disabled>珠海</el-dropdown-item>
          <el-dropdown-item>昆明</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </section>
    <section class="section">
      <header class="header"> 触发对象 按钮  split-button</header>
      <el-dropdown>
        <el-button type="primary">
          下拉菜单 <i class="el-icon-arrow-down el-icon-right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>北京</el-dropdown-item>
          <el-dropdown-item>上海</el-dropdown-item>
          <el-dropdown-item>广州</el-dropdown-item>
          <el-dropdown-item divided>深圳</el-dropdown-item>
          <el-dropdown-item disabled>珠海</el-dropdown-item>
          <el-dropdown-item>昆明</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>


      <el-dropdown split-button type="primary" trigger="click">
        下拉菜单 
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>北京</el-dropdown-item>
          <el-dropdown-item>上海</el-dropdown-item>
          <el-dropdown-item>广州</el-dropdown-item>
          <el-dropdown-item divided>深圳</el-dropdown-item>
          <el-dropdown-item disabled>珠海</el-dropdown-item>
          <el-dropdown-item>昆明</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </section>

    <section class="section">
      <header class="header"> 指令事件</header>
      <el-dropdown @command="handleCommand"> 
        <span class="el-dropdown-link">
          下拉菜单 <i class="el-icon-arrow-down el-icon-right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command='comA'>北京</el-dropdown-item>
          <el-dropdown-item command='comB'>上海</el-dropdown-item>
          <el-dropdown-item command='comC' >广州</el-dropdown-item>
          <el-dropdown-item command='comD' divided>深圳</el-dropdown-item>
          <el-dropdown-item command='comE' disabled>珠海</el-dropdown-item>
          <el-dropdown-item command='comF' >昆明</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },methods:{
      handleCommand(command){
        this.$message('click on item'+ command);

      }
    }
  }
</script>

<style scoped>
.container{ width: 1000px; margin: 0 auto;}
.section{ margin-top: 20px;}
.header{ line-height: 40px;}
.red{ color: red}

.el-dropdown-link{ color: rgb(5, 96, 214);}
</style>
