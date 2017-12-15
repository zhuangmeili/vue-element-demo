<template>
<div class="">
  <section class="section">
    <el-time-select 
      v-model="timeData1" 
      placeholder="选择时间"
      :picker-options="{
        start:'08:30',
        step:'00:15',
        end:'12:00'
      }"
    ></el-time-select>

    {{timeData1}}

  </section>

  <section class="section">
    <header class="header">任意时间段 内选择 格式化 formate  / value-format</header>
    <el-time-picker 
      v-model="timeData2" 
      placeholder="任意时间点"
      formate="HH:mm:ss"
      value-format="HH:mm:ss"
      :picker-options="{
        selectableRange:'08:00:00-12:00:00'
      }"
    ></el-time-picker>

    {{timeData2}}

  </section>


  <section class="section">
    <header class="header">固定时间范围 开始时间确定，结束时间从开始时间顺延 time-select</header>
    开始时间：
     <el-time-select 
      v-model="timeStart3" 
      placeholder="开始时间"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
    ></el-time-select>
    结束时间：
    <el-time-select 
      v-model="timeEnd3" 
      placeholder="结束时间"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime:timeStart3 //这是一个变量timeStart3
      }"
    ></el-time-select>

    {{ timeStart3}}---{{timeEnd3}}
  </section>

  <section class="section">
    <header class="header">时间范围 2 time-picker</header>
    <el-time-picker 
      v-model="timeRange"
      placeholder="选择时间范围"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      range-separator="至"
      is-range
    ></el-time-picker>

    {{timeRange}}
    
  </section>


</div>
  
</template>
<script>
export default{
  data(){
    return {
      timeData1:"",
      timeData2:"",

      timeStart3:"",//开始时间
      timeEnd3:"", //结束时间

      timeRange:"", //时间范围
       
    }
  }
}
  
</script>
<style scoped>
.section{ margin-top: 20px;}
.header{ height: 40px; line-height: 40px; font-size: 16px;}
.selCon{ width: 400px; margin-bottom: 20px;}


</style>

