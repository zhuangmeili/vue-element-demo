<template>
  <div class="">
    <section class="section">
      <header class="header">单个的checkbox默认绑定的变量就是 Boolean 选中 为true</header>
       <el-checkbox  v-model="checkData1">备选项</el-checkbox>
       {{checkData1}}

      <br>
      <br>
      <header class="header"> disabled</header> 
      <el-checkbox  v-model="checkData2" disabled>备选项</el-checkbox>
    </section>

    <section class="section">
      <header class="header">复选 绑定Array类型变量</header>
      <el-checkbox-group v-model="checkData3">
        <el-checkbox label="A">复选A</el-checkbox>
        <el-checkbox label="B">复选B</el-checkbox>
        <el-checkbox label="C">复选C</el-checkbox>
        <el-checkbox label="D">复选D</el-checkbox>
        <el-checkbox label="E" disabled>复选E</el-checkbox>
      </el-checkbox-group>
    </section>

    <section class="section">
      <header class="header">indeterminate 表示chekbox的不确定状态</header>
      <el-checkbox :indeterminate="isIndeterminate" v-model="chenkAllData" @change="checkAllChange">全选</el-checkbox>
      <br>
      <el-checkbox-group v-model="checkData4" @change="checkCityChange">
        <el-checkbox v-for="(item,index) in cityArray" :label="item" :key="index">{{item}}</el-checkbox>
      </el-checkbox-group>
    </section>

    <section class="section">
      <header class="header">按钮样式多选 text-color fill </header>
      <el-checkbox-group v-model="checkData4" @change="checkCityChange" size="mini" text-color="#fff" fill="#f60">
        <el-checkbox-button v-for="(item,index) in cityArray" :label="item" :key="index">{{item}}</el-checkbox-button>
      </el-checkbox-group>
    </section>

    <section class="section">
      <header class="header">border </header>
      <el-checkbox-group v-model="checkData4" @change="checkCityChange">
        <el-checkbox label="1" border >备选1</el-checkbox>
        <el-checkbox label="2">备选2</el-checkbox>
        <el-checkbox label="3">备选3</el-checkbox>
        <el-checkbox label="4" disabled>备选4</el-checkbox>
      </el-checkbox-group>
    </section>





  </div>  
</template>

<script>
  export default{
    data(){
      return{
        checkData1:false,
        checkData2:true,
        checkData3:['A','B'], //默认选中 A B
        //
        cityArray:['北京','上海','广州','深圳','苏州'],
        checkData4:["北京","上海"],
        isIndeterminate:true, //不确定的
        chenkAllData:false,
        //

      }
    },
    methods:{
      checkAllChange(val){
        //console.log(val);
        this.checkData4=val?this.cityArray:[];
        this.isIndeterminate=false; //是确定的
      },
      checkCityChange(val){
        //val是一个数组 选中的元素的数组
        var count=val.length;
        this.chenkAllData=count==this.cityArray.length;
        this.isIndeterminate=count >0 && count<this.cityArray.length;


      }

    }

  }
</script>
<style scoped>
.section{ margin-top: 20px;}
.header{ height: 40px; line-height: 40px; font-size: 16px;}


</style>
