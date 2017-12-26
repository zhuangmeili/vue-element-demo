<template>
  <div class="container">
    <section class="section">
      <header class="header">弹出框
        <span class="danger">注意：必须先写 el-popover 否则 ref="popDom1" 找不到，报错</span>

      </header>
      
      <el-popover 
        ref="popDom1" 
        title="标题" 
        width="200px"
        content="这是一段内容，和到时候说"
        trigger="hover" placement="right">
      </el-popover>

      <el-button type="" v-popover:popDom1 >hover</el-button>

    </section>


  </div>
</template>

<script>
  export default {
    name: "popover-page",
    data() {
      return {}
    }
  }
</script>

<style scoped>
.container{ width: 1000px; margin: 0 auto;}
.section{ margin-top: 20px;}
.header{ line-height: 40px;}
.red{ color: red}

</style>
