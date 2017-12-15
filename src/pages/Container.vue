<template>
  <div class="">
    <section class="section">
      <el-container class="container">
        <el-header class="header">header </el-header>
        <el-main class="main">main</el-main>
        <el-footer class="footer">
            footer
        </el-footer>
      </el-container>
    </section>

    <section class="section">
      <el-container class="container">
        <el-aside width="200px">第二组Aside</el-aside>
        <el-main class="main">main</el-main>
      </el-container>
    </section>

    <section class="section">
      <el-header class="header">第三组 header top</el-header>
      <el-container class="container">
        <el-aside width="200px">Aside left</el-aside>
        <el-container>
          <el-main class="main">main right</el-main>
          <el-footer class="footer">footer</el-footer>
        </el-container>
      </el-container>
    </section>

    <section class="section">
      <el-aside width="200px">Aside left</el-aside>
      <el-container class="container">
        <el-header class="header">第四组 header</el-header>
        <el-main class="main">main </el-main>
        <el-footer class="footer">footer</el-footer>
      </el-container>
    </section>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {

      }
    },
    mounted(){

    }
  }
</script>
<style scoped="scoped">
.section{ margin: 20px 0;}
.container {
  background: #eeeeee;
}
.header {
  background: #0764cb;
}
.main {
  background: #c0c0c0;
}
.footer {
  background: #999;
}
.aside{
  background: pink;
}


</style>
