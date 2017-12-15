<template>
  <div class="container">

    <section class="section">
      <header class="header">
        默认的日期 格式化 formate value-formate
      </header>
      <el-date-picker
        type="date"
        v-model="dateData1"
        placeholder="选择日期"
        format="yyyy年MM月dd日"
        value-format="yyyy年MM月dd日"
        >
      </el-date-picker>
      {{dateData1}}
    </section>

    <section class="section">
      <header class="header">
        带有快捷选项 格式化
      </header>
      <el-date-picker
        type="date"
        v-model="dateData2"
        placeholder="选择日期"
        :picker-options="pickerOptions2"
        format="yyyy年MM月dd日"
        value-format="yyyy-MM-dd"
        >
      </el-date-picker>
      {{dateData2}}
    </section>


    <section class="section">
      <header class="header">
        选择日期范围
      </header>
      <el-date-picker
        type="daterange"
        v-model="dateData3"
        range-seperator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        >
      </el-date-picker>
      {{dateData3}}
    </section>


    <section class="section">
      <header class="header">
        默认显示日期
      </header>
      <el-date-picker
        type="daterange"
        v-model="dateData3"
        range-seperator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        >
      </el-date-picker>
      {{dateData3}}
    </section>


  </div>
</template>
<script>
export default {
  data(){
    return{
      dateData1:"",
      dateData2:"",
      pickerOptions2:{
        disabledDate(time){
          return time.getTime()>Date.now();
        },
        shortcuts:[
          {text:"今天",onClick(picker){picker.$emit('pick',new Date())}},
          {
            text:"昨天",
            onClick(picker){
              const date=new Date();
              date.setTime(date.getTime()-3600*1000*24);
              picker.$emit('pick',date);
            }
          },
          {
            text:"一周前",
            onClick(picker){
              const date=new Date();
              date.setTime(date.getTime()-3600*1000*24*7);
              picker.$emit('pick',date);
            }
          }
        ]
      },
      dateData3:"",

    }
  }

}
</script>

<style scoped>
.container{ }
.section{ margin-top: 20px;}
.header{ font-size: 22px; line-height: 40px;}


</style>

