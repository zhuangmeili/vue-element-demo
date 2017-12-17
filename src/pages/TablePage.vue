<template>
  <div class="container">
    <header>
      单选、显示行号  
      <br>
      属性 ：type="index"
      属性：highlight-current-row
      时间 @current-change=""

    </header>
    <el-table :data="tableData" ref="tableData" stripe border style="width:100%"
     highlight-current-row @current-change="currentChange" 
     header-row-class-name="cellName">
      <el-table-column fixed="left" width="50" type="index"></el-table-column>
      <el-table-column label="日期" prop="date" min-width="300"></el-table-column>
      <el-table-column label="姓名" prop="name" min-width="500"></el-table-column>
      <el-table-column label="地址" prop="address" min-width="500"></el-table-column>
    </el-table>
    <div style="margin:20px">
      <el-button type="primary" @click="setCurrent(tableData[1])">选中第二行</el-button>
      <el-button type="" @click="setCurrent()">取消</el-button>
    </div>

    <header class="header">多级表头   el-table-column 里面嵌套 el-table-column，就可以实现多级表头 </header>
    <el-table :data="tableData2" stripe border >
      <el-table-column label="日期" prop="date" width="150" ></el-table-column>
      <el-table-column label="配送信息">
        <!--  嵌套 table-column -->
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="地址" prop="address"></el-table-column>
        <el-table-column label="省份" prop="province"></el-table-column>
        <el-table-column label="市区" prop="city"></el-table-column>
        <el-table-column label="地址" prop="address"></el-table-column>
        <el-table-column label="邮编" prop="zip"></el-table-column>

        <!--  嵌套 table-column -->
      </el-table-column>
      
    </el-table>

  </div>
</template>

<script>
  export default {
    name: "table-page",
    data() {
      return {
        currentRow:null,//当前行
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
        tableData2: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    methods:{
      setCurrent(row){
        this.$refs['tableData'].setCurrentRow(row);
      },
      currentChange(val){
        this.currentRow=val;
      }
    }
  }
</script>

<style scoped>
.container{ width: 1000px; margin: 30px auto;}
.header{ line-height: 40px;}
.cellName{ background: #333;}
</style>
