<template>
  <div class="">
    <section class="section">
      <el-form :model="formData" :rules="rules" label-width="100px" >
        <el-form-item label="密码" prop="pass">
          <el-input v-model="formData.pass" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="formData.checkPass" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="formData.age" placeholder=""></el-input>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formData:{
          pass:'',
          checkPass:'',
          age:''
        },
        rules:{
          pass:[{}],
          checkPass:[{}],
          age:[{}]
        },
      }
    }
  }
</script>

<style scoped>
  .section{ width: 460px;  padding: 0 20px; margin: 20px auto;}
  .el-date-editor.el-input{ width: 100%;}
</style>
