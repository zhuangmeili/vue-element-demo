<template>
  <div class="container">
    <section class="section">
      <header class="header"> MessageBox 的作用是美化系统自带的 alert、confirm 和 prompt,
        <br>
        此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。</header>

        <el-badge value="$alert">
          <el-button type="" :plain="true" @click="open1">点击打开alert</el-button>
        </el-badge>
        <br> <br>
         <el-badge value="$confirm">
          <el-button type="" :plain="true" @click="open2">点击打开confirm</el-button>
        </el-badge>
      
    </section>

  </div>
</template>

<script>
  export default {
    name: "message-box-page",
    data() {
      return {}
    },
    methods:{
      open1(){
        this.$alert('这是内容','提示',{
          confirmButtonTxt:'确定',
          //写法一：写成callback
          // callback:action=>{
          //   this.$message({
          //     message:`action:${action}`
          //   })
          // }
          //写法二，写成promise  如下 then  catch
        }).then((res)=>{
            this.$message({
              message:`action:${res}`
            })

        }).catch((error)=>{
            this.$message({
              message:`action:${error}`
            })
        })
      },
      open2(){
        this.$confirm('此操作将永久删除该文件，是否继续？','提示',{
          confirmButtonTxt:'确定',
          cancelButtonTxt:'取消',
          type:'wraning'
        }).then((res)=>{
          this.$message({
            type:'success',
            message:'删除成功'
          });

        }).catch((error)=>{
          this.$message({
            type:'info',
            message:'已取消删除'
          })
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
