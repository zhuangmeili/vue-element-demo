<template>
  <div class="">

    <com-paginate
      :total-page="totalPage"
      :page-size="pageSize"
      :page-current="currentPage" @change="pageChange">
    </com-paginate>

    <br>
    当前页码为：{{currentPage}}
  </div>
</template>

<script>
  import ComPaginate from '../components/ComPaginate'
  export default {
    data() {
      return{
        totalPage:11,    //总页数
        pageSize:10,  //每页显示的数据条数
        currentPage:1,//当前的页码
      }
    },
    components:{ComPaginate},
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
