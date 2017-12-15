<template>
  <div class="">
   <el-row :gutter="20" class="itemRow">       
     <!-- col1 -->
     <el-col :span="12" class="itemCol"> </el-col>
     <el-col :span="12" class="itemCol"></el-col>
   </el-row>

   <el-row class="itemRow">
     <el-col :span="6 " class="itemCol"></el-col>
     <el-col :span="6" :offset="3" class="itemCol"></el-col>
     <el-col :span="6" :offset="3" class="itemCol"></el-col> 
   </el-row>
   <el-row class="itemRow" type="flex" justify="center">
     <el-col :span="3" class="itemCol">justify center</el-col>
     <el-col :span="3" class="itemCol"></el-col>
     <el-col :span="3" class="itemCol"></el-col>
   </el-row>

   <el-row class="itemRow" type="flex" justify="space-between">
     <el-col :span="3" class="itemCol">justify space-between</el-col>
     <el-col :span="3" class="itemCol"></el-col>
     <el-col :span="3" class="itemCol"></el-col>
   </el-row>

   <el-row class="itemRow" type="flex" justify="space-around">
     <el-col :span="3" class="itemCol">justify space-around</el-col>
     <el-col :span="3" class="itemCol"></el-col>
     <el-col :span="3" class="itemCol"></el-col>
   </el-row>
   <el-row class="itemRow">
     <el-col :span="3" class="itemCol" :push="3"></el-col>

     <el-col :span="3" class="itemCol" :push="3"></el-col>
   </el-row>
  
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {};
  }
};
</script>
<style scoped="scoped">
.itemRow {
  margin: 20px 0;
}
.itemCol {
  height: 100px;
}
.itemRow .itemCol:nth-child(6n) {
  background: #000;
}
.itemRow .itemCol:nth-child(6n + 1) {
  background: #333;
}
.itemRow .itemCol:nth-child(6n + 2) {
  background: #666;
}
.itemRow .itemCol:nth-child(6n + 3) {
  background: #999;
}
.itemRow .itemCol:nth-child(6n + 4) {
  background: pink;
}
.itemRow .itemCol:nth-child(6n + 5) {
  background: purple;
}
</style>
