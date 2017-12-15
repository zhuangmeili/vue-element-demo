<template>
  <div class="">
    <section class="section">
      <header class="header ">对齐方式 label-position </header>
      <el-form :model="formData1" label-width="100px" label-position="right">
        <el-form-item label="名称">
          <el-input v-model="formData1.name" placeholder="输入活动名称"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select class="el-input" v-model="formData1.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="guangzhou"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker class="el-input" v-model="formData1.date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
          </el-col>
          <el-col :span="2" class="TC">-</el-col>
          <el-col :span="11">
            <el-time-picker class="el-input" v-model="formData1.time" placeholder="选择时间" value-format="HH:mm:ss" ></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="及时配送">
          <el-switch v-model="formData1.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="formData1.type">
             <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
             <el-checkbox label="地推活动" name="type"></el-checkbox>
             <el-checkbox label="线下主题活动" name="type"></el-checkbox>
             <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="submitForm">立即创建</el-button>
          <el-button >取消</el-button>
        </el-form-item>

      </el-form>
    </section>

    <section class="section">
      <header class="header ">行内表单 属性inline</header>
      <el-form :model="formData1"  :inline="true">
        <el-form-item label="活动名称">
          <el-input v-model="formData1.name" placeholder="输入活动名称"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select class="el-input" v-model="formData1.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="guangzhou"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
  export default {
    name: "form-page",
    data() {
      return {
        formData1:{
          name: '',
          region: '',
          date: '',
          time: '',
          delivery: false,
          type: [],
        }, //form
      }
    },
    methods:{
      submitForm(){
        console.log("submit");
      }
    }
  }
</script>

<style scoped>
.section{ width: 600px; border: 1pxsolid #ddd; padding: 0 20px; margin: 20px auto;}
.el-date-editor.el-input{ width: 100%;}
</style>
