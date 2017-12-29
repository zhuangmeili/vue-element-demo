<template>
  <div class="">
    <com-paginate></com-paginate>
    <!-- 转变 2-->
    <com-paginate2
      :total-page="totalPage"
      :page-size="pageSize"
      :page-current="currentPage" @change="pageChange">
    </com-paginate2>

    <br>
    当前页码为：{{currentPage}}
  </div>
</template>

<script>
  import ComPaginate from '../components/ComPaginate'
  import ComPaginate2 from '../components/ComPaginate2'
  export default {
    data() {
      return{
        totalPage:11,    //总页数
        pageSize:10,  //每页显示的数据条数
        currentPage:7,//当前的页码
      }
    },
    components:{ComPaginate,ComPaginate2},
    methods:{
      pageChange(val){
        this.currentPage=val;
        console.log("pageChange:"+val);
      }
    },
  }
</script>

<style scoped>


</style>
