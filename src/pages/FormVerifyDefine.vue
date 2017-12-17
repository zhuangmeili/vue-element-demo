<template>
  <div class="">
    <section class="section">
      <header>自定义校验器  status-icon Boolean
        <br>
       <el-tag type="danger">this.$refs.ruleForm.validateField('checkPass'); //注意：这一行，不清楚有啥用</el-tag>

      </header>
      <el-form :model="formData" status-icon :rules="rules" ref="ruleForm" label-width="100px" >
        <el-form-item label="密码" prop="pass">
          <el-input v-model="formData.pass" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="formData.checkPass" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="formData.age" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm">重置</el-button>
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
          pass:[{validator:this.validatePass,trigger:'blur'}],
          checkPass:[{validator:this.validatePass2,trigger:'blur'}],
          age:[{validator:this.checkAge,trigger:'blur'}]
        },
      }
    },
    methods:{
      validatePass(rule,value,callback){
        if(value===''){
          callback("请输入密码");

        }else{
          //validateField 对表单部分字段在进行校验
          //当第一个密码不为空，则再次校验，两次密码是否一致
          if(this.formData.checkPass!==''){
            console.log("checkpass 不为空, 判断是否相等");    
            this.$refs.ruleForm.validateField('checkPass'); //注意：这一行，不清楚有啥用
          }
         callback();
        }

      },
      validatePass2(rule,value,callback){
        if(value===''){
          callback(new Error("请再次输入密码"));
        }else if(value!==this.formData.pass){
          callback(new Error("两次输入密码不一致"));
        }else{
          callback();
        }

      },
      checkAge(rule,value,callback){
        if(!value){
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if(Number(value)!=value){
            callback(new Error("请输入数字"));
          }else{
            if(value<18){
              callback(new Error("必须年满18岁"))
            }else{
              callback();
            }
          }
          
        }, 1000);

      },
      submitForm(){
        this.$refs['ruleForm'].validate((valid)=>{
          if(valid){
            alert("submit");
          }else{
            console.log("error submit");
            return false;
          }
        })

      },
      resetForm(){
        //重置
        this.$refs['ruleForm'].resetFields();
      },

    }
  
  }
</script>

<style scoped>
  .section{ width: 460px;  padding: 0 20px; margin: 20px auto;}
  .el-date-editor.el-input{ width: 100%;}
</style>
