<template>
<div class="">
  <section class="section">
    <el-select v-model="selData1" placeholder="请选择" clearable >
      <el-option 
      v-for="(item,index) in selOptions1" 
      :key="index" 
      :label="item.label" 
      :value="item.value">
      </el-option>
    </el-select>

    <br>
    <br>
    <header class="header">基础多选 （属性 multiple ）</header>
    <el-select v-model="selData2" placeholder="请选择" multiple  >
      <el-option 
      v-for="(item,index) in selOptions1" 
      :key="index" 
      :label="item.label" 
      :value="item.value">
      </el-option>
    </el-select>

    <br>
    <br>
    <header class="header">自定义options 带搜索filterable</header>
    <el-select v-model="selData3" placeholder="请选择" filterable   >
      <el-option 
      v-for="(item,index) in selOptions1" 
      :key="index" 
      :label="item.label" 
      :value="item.value">
      <span class="FL">{{item.label}}</span>
      <span class="FR">{{item.name}}</span>
      </el-option>
    </el-select>



  </section>

</div>
  
</template>
<script>
export default{
  data(){
    return {
      selData1:"",
      selOptions1:[{
          value: '1',
          label: '黄金糕',
          name:"huangjingao"
        }, {
          value: '2',
          label: '双皮奶',
          name:"shuangpinai"
        }, {
          value: '3',
          label: '蚵仔煎',
          name:"hezijian"
        }, {
          value: '4',
          label: '龙须面',
          name:"longxumian"
        }, {
          value: '5',
          label: '北京烤鸭',
          name:"beijingkaiya"
        }],
        selData2:[], //多选 使用一个数组接收
        selData3:"",
    }
  }
}
  
</script>
<style scoped>
.section{ margin-top: 20px;}
.header{ height: 40px; line-height: 40px; font-size: 16px;}
.selCon{ width: 400px; margin-bottom: 20px;}


</style>

