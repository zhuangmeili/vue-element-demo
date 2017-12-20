<template>
  <div class="">
    <section class="section">
      <el-alert type="info" title="消息提示的文案"></el-alert>
      <el-alert type="success" title="成功提示的文案"></el-alert>
    </section>
    <section class="section">
      <header class="header">自定义关闭按钮  closable </header>
      <el-alert type="info" :closable="false"   title="不可关闭"></el-alert>
      <el-alert type="success" closable title="可以关闭"></el-alert>
    </section>
    <section class="section">
      <header class="header">带icon   </header>
      <el-alert type="info" show-icon center title="文字居中"></el-alert>
      <el-alert type="success" show-icon title="成功提示的文案"></el-alert>
    </section>

    <section class="section">
      <header class="header">辅助文字介绍   </header>
      <el-alert type="info"  title="标题"
      show-icon
      description="zheshi 是F斯蒂芬斯蒂芬是的，似懂非懂是否是水电费水电费地方佛挡杀佛地方上的父"></el-alert>
     <el-alert type="error"  title="错误提示标题"
      show-icon
      description="zheshi 是F斯蒂芬斯蒂芬是的，似懂非懂是否是水电费水电费地方佛挡杀佛地方上的父"></el-alert>
    
    </section>

  </div>
</template>


<script>
  export default {
    name: "alert-page",
    data() {
      return {}
    }
  }
</script>

<style scoped>
.section{ margin-top: 20px;}
.header{ line-height: 40px;}
</style>
