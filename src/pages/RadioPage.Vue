<template>
  <div class="">
    <section class="section">
      <h2 class="header">label属性 就是Radio的value</h2>
      <el-radio label="label1" v-model="radioData1">备选项1</el-radio>
      <el-radio label="label2" v-model="radioData1">备选项2</el-radio>
      <el-radio label="禁用" v-model="radioData1" disabled>禁用</el-radio>
    </section>

    <section class="section">
      <el-radio-group v-model="radioData2">
        <el-radio label="3">备选项</el-radio>
        <el-radio label="6">备选项</el-radio>
        <el-radio label="9">备选项</el-radio>
      </el-radio-group>

    </section>

    <section class="section">
      <h2 class="header">按钮样式的单选组合</h2>
      <el-radio-group v-model="radioData3" >
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
      </el-radio-group>
    </section>

     <section class="section">
      <h2 class="header">带有边框 （属性 disabled border） </h2>
      <el-radio label="1" border v-model="radioData4" disabled>备选项1</el-radio>
      <el-radio label="2" border v-model="radioData4" >备选项2</el-radio>
      <el-radio label="3" border v-model="radioData4">备选项3</el-radio>
      <el-radio label="4" border v-model="radioData4">备选项4</el-radio>
    </section>
    <section class="section">
      <h2 class="header">带有边框 size 只有当border存在时候（border size）</h2>
      <el-radio-group v-model="radioData5" size="mini">
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border>备选项2</el-radio>
        <el-radio label="3" border>备选项3</el-radio>
        <el-radio label="4" border>备选项4</el-radio>
      </el-radio-group>
    </section>

    <section class="section">
      <h2 class="header">text-color fill</h2>
      <el-radio-group v-model="radioData6" text-color="#fff" fill="#f60" @change="radioChange">
        <el-radio-button label="1test" border>备选项1</el-radio-button>
        <el-radio-button label="2" border>备选项2</el-radio-button>
        <el-radio-button label="3test" border>备选项3</el-radio-button>
        <el-radio-button label="4test" border>备选项4</el-radio-button>
      </el-radio-group>
    </section>


  </div>
  
</template>

<script>
  export default{
    data(){
      return {
        radioData1:'label1',
        radioData2:'3',
        radioData3:"北京",
        radioData4:"2",
        radioData5:"3",
        radioData6:"2",

      }
    },
    methods:{
      radioChange(val){
        this.radioData6=val;
        console.log(val);
      }
    }
    
  }
</script>

<style scoped>
.section{ margin-top: 20px;}
.header{ height: 40px; line-height: 40px; font-size: 16px;}

</style>


