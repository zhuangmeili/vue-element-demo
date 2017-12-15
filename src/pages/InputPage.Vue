<template>
  <div class="container">
    <section class="section">
      <header class="header"></header>
      <div class="inputCon">
        <el-input v-model="txtData1" placeholder="请输入内容"></el-input>
      </div>

      <div class="inputCon">
        <el-input v-model="txtData1" placeholder="请输入内容" disabled></el-input>
      </div>
      <header class="header">可清空 clearable </header>
      <div class="inputCon">
        <el-input v-model="txtData1" placeholder="请输入内容" clearable ></el-input>
      </div>


      <header class="header">带icon的输入框 后缀 suffix 前缀 prefix </header>
      <div class="inputCon">
        <el-input v-model="txtData1" placeholder="请输入内容" suffix-icon="el-icon-date"  ></el-input>
      </div>

      <div class="inputCon">
        <el-input v-model="txtData1" placeholder="请输入内容" prefix-icon="el-icon-search" ></el-input>
      </div>

      <div class="inputCon">
        <el-input v-model="txtData1" placeholder="请输入内容">
          <i slot="prefix" class="el-input__icon el-icon-date"></i>
        </el-input>
      </div>
    </section>  

    <section class="section">
      <header class="header">文本域 type="textarea"</header>
      <div class="inputCon">
        <el-input v-model="areaData" type="textarea" :rows="5" placeholder="请输入内容"></el-input>
      </div>
    </section>

    <section class="section">
      <header class="header">文本域 autosize 可以是number可以是object</header>
      <div class="inputCon">
        <el-input v-model="areaData" type="textarea" :autosize="{minRows:1,maxRows:5}" placeholder="请输入内容"></el-input>
      </div>
    </section>


    <section class="section">
      <header class="header">符合输入框 slot="prepend || apped"</header>
      <div class="inputCon">
        <el-input v-model="areaData" placeholder="输入地址">
          <template slot="prepend">http://</template>
        </el-input>
      </div>

      <div class="inputCon">
        <el-input v-model="areaData" placeholder="输入地址">
          <template slot="append">.com</template>
        </el-input>
      </div>

      <div class="inputCon">
        <el-input v-model="areaData" placeholder="输入地址">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>


      <div class="tip">input输入框 带有建议的输入框没有看</div>

      

      
    </section>


  </div> 
</template>
<script>
export default {
  data() {
    return {
      txtData1: "",
      areaData:"",
      selectData:"",

    };
  },
  methods: {}
};
</script>
<style scoped>
.container{ padding-bottom: 200px;}
.section {
  margin-top: 20px;
}
.header {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.inputCon{ width: 400px; margin-bottom: 20px;}

.tip{ font-size: 30px; color: #f00}

</style>
