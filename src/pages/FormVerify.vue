<template>
  <div class="">
    <section class="section">
      <header class="header ">表单验证 form设置 rules，item上设置 prop ,ref属性</header>
      <el-form :model="formData1" label-width="100px" label-position="right" :rules="rules" ref="formVerify">
        <el-form-item label="名称" prop="name">
          <el-input v-model="formData1.name" placeholder="输入活动名称"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
          <el-select class="el-input" v-model="formData1.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="guangzhou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date">
              <el-date-picker  class="el-input"  v-model="formData1.date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2" class="TC">-</el-col>
          <el-col :span="11" >
            <el-form-item prop="time">
              <el-time-picker class="el-input"  v-model="formData1.time" placeholder="选择时间" value-format="HH:mm:ss" ></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="及时配送" prop="delivery">
          <el-switch v-model="formData1.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="formData1.type">
            <!--  name相同为一组 -->
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="formData1.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="formData1.desc"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="submitForm">立即创建</el-button>
          <el-button  @click="resetForm">取消</el-button>
        </el-form-item>

      </el-form>
    </section>

  </div>
</template>

<script>
  export default {
    name: "form-verify",
    data() {
      return {
        formData1:{
          name: '',
          region: '',
          date: '',
          time: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }, //form
        //校验规则
        rules:{
          name:[
            { required:true,message:"请输入活动名称",trigger:'blur'},
            { min:3, max:5, message:"长度在3-5个字符",trigger:'blur'},
          ],
          region:[
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date:[
            {  required: true, message: '请请选择日期', trigger: 'change' }
          ],
          time:[
            {  required: true, message: '请请选择时间', trigger: 'change' }
          ],
          type:[
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource:[
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc:[
             { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      submitForm(){
        //传入 ref
        this.$refs['formVerify'].validate((valid)=>{
          console.log( JSON.stringify(this.formData1));
          if(valid){
            alert("submit success");
          }else{
            console.log("error");
            return false;
          }
        })
      },
      resetForm(){
        //清空 form
        this.$refs['formVerify'].resetFields();
        console.log( JSON.stringify(this.formData1));
      }
    },
    
  }
</script>

<style scoped>
.section{ width: 460px; border: 1px solid #ddd; padding: 0 20px; margin: 20px auto;}
.el-date-editor.el-input{ width: 100%;}
</style>
