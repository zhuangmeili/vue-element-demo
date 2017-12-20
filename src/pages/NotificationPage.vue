<template>
  <div class="container">
    <section class="section">
      <header class="header">基本用法</header>
      <el-button type="" :plain="true" @click="open1">可以自动关闭</el-button>
    </section>

  </div>
</template>

<script>
  export default {
    name: "notification-page",
    data() {
      return {}
    },
    methods:{
      open1(){
       this.$notify({
          type:'warning',
          title:'提示',
          message:'这是一条消息',
          position: 'bottom-right'
       })

      }
    }
  }
</script>

<style scoped>
.container{ width: 1000px; margin: 0 auto;}
.section{ margin-top: 20px;}
.header{ line-height: 40px;}
.red{ color: red}

</style>
