<template>
  <div class="">
    <section class="section">
      <el-form :model="formData1" label-width="100px">
        <el-form-item label="活动名称">
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
          resource: '',
          desc: ''
        }, //form
      }
    }
  }
</script>

<style scoped>
.section{ width: 460px; border: 1pxsolid #ddd; padding: 0 20px; margin: 20px auto;}
.el-date-editor.el-input{ width: 100%;}
</style>
