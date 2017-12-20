<template>
  <div class="container">
    <section class="section">
      <el-pagination
        background
        :total="297"
        :current-page="2"
        :page-size="10"
        @current-change="currentChange"
        layout="prev,pager,next,jumper">
      </el-pagination>
    </section>
    <section class="section">
      <el-pagination
        background
        small
        :total="297"
        :current-page="2"
        :page-size="10"
        @current-change="currentChange"
        layout="prev,pager,next,jumper">
      </el-pagination>
    </section>
    <section class="section">
      <header class="header">显示total 共***条 （layout="total"）</header>
      <el-pagination background small :total="297" :current-page="2" :page-size="10" @current-change="currentChange"
                     layout="total,prev,pager,next,jumper">
      </el-pagination>
    </section>
    <section class="section">
      <header class="header">调整每页显示条数 (layout="sizes")</header>
      <el-pagination background small :total="297" :current-page="2" :page-size="10" :page-sizes="[10,20,30]"
                     layout="sizes,prev,pager,next" @size-change="sizeChange" @current-change="currentChange">
      </el-pagination>
    </section>
  </div>
</template>

<script>
  export default {
    name: "pagination-page",
    data() {
      return {}
    },
    methods: {
      sizeChange(val) {
        console.log(val);
      },
      currentChange(val) {
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 1000px;
    margin: 0 auto;
  }

  .header {
    line-height: 40px;
  }

  .section {
    margin-top: 20px;
  }
</style>
