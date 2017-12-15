<template>
  <div class="">
    <section class="section">
      <header class="header">绑定的数据 为Number类型 </header>
       <el-rate v-model="rateData1"></el-rate>{{rateData1}}
    </section>
    <section class="section">
      <header class="header">区分颜色  属性 colors</header>
       <el-rate v-model="rateData1" :colors="colorArray"></el-rate>{{rateData1}}
    </section>

    <section class="section">
      <header class="header">辅助文字  show-text / texts</header>
       <el-rate v-model="rateData1"  show-text :texts="texts"></el-rate>{{rateData1}}
    </section>
    <section class="section">
      <header class="header">其它icon  icon-classes / void-icon-class</header>
       <el-rate v-model="rateData2" 
       :icon-classes="iconArray" 
       void-icon-class="el-icon-circle-close-outline" :colors="colorArray"></el-rate>{{rateData1}}
    </section>

    <section class="section">
      <header class="header">制度的评分  disabled / score-template 显示模板 </header>
       <el-rate v-model="rateData3" 
       
       disabled show-score score-template="得{value}分" ></el-rate>{{rateData1}}
    </section>


  </div>
</template>

<script>
  export default {
    name: "rate-page",
    data() {
      return {
        rateData1:0, //需要number类型
        colorArray:['#ccc','#f7ba2a','#f00'],
        texts:["等级A","等级B","等级C","等级D","等级E"],
        rateData2:null,
        iconArray:['el-icon-circle-close', 'el-icon-circle-close-outline', 'el-icon-close'],
        value4:null,
        rateData3:3.6
      }
    }
  }
</script>

<style scoped>
.section{ margin-top: 20px;}
.header{ height: 40px; line-height: 40px; font-size: 16px;}
.selCon{ width: 400px; margin-bottom: 20px;}

</style>
