<template>
  <div class="container">
    <section class="section">
      <header class="header"></header>
      <el-button type="" :plain="true" @click="open1">打开消息提示框</el-button>
      <el-button type="" :plain="true" @click="open2">VNode</el-button>
      <el-button type="" :plain="true" @click="open3">使用HTML片段</el-button>
    </section>

  </div>
</template>

<script>
  export default {
    name: "messaage-page",
    data() {
      return {}
    },
    methods:{
      open1(){
        this.$message({
          showClose:true, //显示关闭按钮
          message:"这是一条提示",
          type:'error',
          iconClass:'el-icon-loading',
          duration:500
        });
      },
      open2(){
        const h=this.$createElement;
        this.$message({
          message:h('p',null,[
            h('span',null,'内容可以是'),
            h('i',{ style:'color:red'},'VNode')
          ])
        })

      },
      open3(){
        this.$message({
          dangerouslyUseHTMLString:true,
          message:'<strong class="FB">这是</strong><i class="red">HTML</i>片段'
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
