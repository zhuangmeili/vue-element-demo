<template>
  <div class="">
    <header class="header"> 属性 inline-message inline="true"</header>
    <el-form :model="formData" ref="ruleForm" label-width="100px" >
      <el-form-item label="邮箱" prop="email" 
        :rules="[{required:true,message:'请输入邮箱地址',trigger:'blur'},
        {type:'email',message:'请输入正确的邮箱地址',trigger:'blur,change'}]">
        <el-input v-model="formData.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item 
        v-for="(item,index) in formData.domains"
        :prop="'domainItemVal'+index"
        :label="'域名'+index" 
        :key="index" 
        :rules="{ required: true, message: `域名${index}不能为空`, trigger: 'blur'}" >
        <el-input v-model="item.value" placeholder=""></el-input>
        <el-button type="danger" @click="removeItem(item,index)">删除</el-button>
      </el-form-item>
      <el-form-item label="">
         <el-button type="warning" @click="addItem">新增域名</el-button>
         <br><br>
         <div class="line"></div>
         <br>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button type="" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    
  </div>
</template>

<script>
  export default {
    name: "form-dynamic",
    data() {
      return {
        formData:{
          email:"",
          domains:[{value:''}]
        }
      }
    },
    methods:{
      //添加
      addItem(){
        this.formData.domains.push({
          value:''
        });
        console.log(this.formData);
      },
      //删除
      removeItem(item,index){
        console.log("删除的是"+index);
        this.formData.domains.splice(index,1); 
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
        this.$refs['ruleForm'].resetFields();
      }

    }
  }
</script>

<style scoped>
.el-input{ width: 300px;}
.header{ line-height: 40px;}
.line{ height: 1px; background: #ddd;}

</style>
