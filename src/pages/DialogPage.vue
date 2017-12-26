<template>
  <div class="container">
    <section class="section">
      <header class="header"></header>
      <el-button type="primary" @click="dialogVisible=true">点击打开Dialog</el-button>
      
      <el-dialog title="提示"
        :visible="dialogVisible" width="400px" @close="dialogVisible=false"
        >
        <span>这是一段信息</span>
        <footer slot="footer">
          <el-button type="" @click="dialogVisible=false">取消</el-button>
          <el-button type="primary" @click="dialogVisible=false">确定</el-button>
        </footer>
      </el-dialog>

    </section>

    <section class="section">
      <header class="header">嵌套的Dialog(内层的dialog需要 添加属性append-to-body)</header>
      <el-button type="primary" @click="outerDialogVisible=true">打开外层的dialog</el-button>
      <el-dialog title="提示"
        :visible="outerDialogVisible" width="600px" @close="outerDialogVisible=false">
        <span>这是一段信息</span>

        <el-dialog title="提示" width="400px" :visible="innerDialogVisible" append-to-body>
          <p>我是内层的dialog</p>
          <footer slot="footer">
            <el-button type="primary" @click="innerDialogVisible=false">确定</el-button>
          </footer>
        </el-dialog>
        <footer slot="footer">
          <el-button type="" @click="outerDialogVisible=false">取消</el-button>
          <el-button type="primary" @click="innerDialogVisible=true">打开内层的dialog</el-button>
        </footer>
      </el-dialog>
    </section>

    <div style="height:10000px;"></div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible:false,
        outerDialogVisible:false,
        innerDialogVisible:false,
      }
    },methods:{
     
    }
  }
</script>

<style scoped>
.container{ width: 1000px; margin: 0 auto;}
.section{ margin-top: 20px;}
.header{ line-height: 40px;}
.red{ color: red}


</style>
