<template>
  <div class="page">
    <section class="pageCon">
      <!-- left -->
      <div class="pageConL">
        <button  type="button" :disabled="currentPage==1" class="prev" :class="{ disabled:currentPage==1}" @click="prevPage">上一页</button>
      </div>
      <!-- center -->
      <ul class="pageConC clearfix">
        <!-- 第一页-->
        <li v-if="totalPage!==1" :class="{cur:currentPage==1}" @click="goPage(1)">1</li>
        <li class="dot" v-if="preClipped">...</li>
        <li v-for="index in pages" :class="{cur:currentPage==index}" :key="index" @click="goPage(index)">{{index}}</li>
        <li class="dot" v-if="backClipped">...</li>
        <!-- 最后一页-->
        <li :class="{cur:currentPage==totalPage}"  @click="goPage(totalPage)">{{totalPage}}</li>
      </ul>
      <!-- right -->
      <div class="pageConR  clearfix">
        <button type="button" class="next" :class="{disabled:currentPage==totalPage}" :disabled="currentPage==totalPage" @click="nextPage">下一页</button>
        <div class="inputCon" >
          共2页&nbsp;到第<input v-model="jumpPage" type="text" name="jumpPage" class="jumpInput">页
        </div>
        <button type="button" class="confirmBtn FL" @click="confirmPage">确定</button>
      </div>
      <!-- right -->
    </section>
  </div>

</template>

<script>
  /*
  注意：父组件传递过来的  pageCurrent，需要在props中声明，但是不能直接修改跑props中的（pageCurrent）
  解决办法：
  1、在data中定义一个变量  currentPage=xxx,接收这个props
  2、watch currentPage的变化，并且携带参数（currentPage）
  3、父组件接收 currentPage
  * */
  export default {
    data() {
      return {
        currentPage:this.pageCurrent,//初始值为传递过来的当前页码
        preClipped:true, //用于判断省略号是否显示
        backClipped:false,
        jumpPage:1,//跳转到第几页
      }
    },
    props:{
      totalPage:{ type:Number},   //总页数
      pageSize:{ type:Number},    //每页显示的数据条数
      pageCurrent:{ type:Number}, //当前的页码
    },
    computed:{
      pages:function () {
        let ret = [];
        //console.log(this.currentPage);
        if (this.currentPage > 3) {
          // 当前页码大于三时，显示当前页码的前2个
          ret.push(this.currentPage - 2)
          ret.push(this.currentPage - 1)
          if (this.currentPage > 4) {
            // 当前页与第一页差距4以上时显示省略号
            this.preClipped = true
          }
        } else {
          this.preClipped = false
          for (let i = 2; i < this.currentPage; i++) {
            ret.push(i)
          }
        }
        //显示当前页码
        if (this.currentPage !== this.totalPage && this.currentPage !== 1) {
          ret.push(this.currentPage)
        }
        //显示页面后两位
        if (this.currentPage < (this.totalPage - 2)) {
          // 显示当前页码的后2个
          ret.push(this.currentPage + 1)
          ret.push(this.currentPage + 2)
          if (this.currentPage <= (this.totalPage - 3)) {
            this.backClipped = true
          }
        } else {
          this.backClipped = false
          for (let i = (this.currentPage + 1); i < this.totalPage; i++) {
            ret.push(i)
          }
        }
        // 返回整个页码组
        return ret
      }
    },
    methods:{
      goPage(index){
        this.currentPage=index;
      },
      prevPage(){
        this.currentPage--;
      },
      nextPage(){
        this.currentPage++;
      },
      confirmPage(){
        var jumpPage=Number(this.jumpPage.trim());
        if(jumpPage>=1 && jumpPage<=this.totalPage){
          this.currentPage=jumpPage;
        }
      }
    },
    watch:{
      currentPage(){
        this.$emit('change',this.currentPage);
      }
    }

  }
</script>

<style scoped>
  .page{ text-align: center; height: 44px;  padding-top:20px; padding-bottom: 20px;}
  .pageCon *{ font-family: "宋体" !important; font-size: 14px;}
  .pageCon{ display: inline-block;*float:right;}

  /* left*/
  .pageConL{ float: left;}
  .pageCon .prev,.pageCon .next{ cursor: pointer; position: relative;width: 65px; height:38px; line-height: 38px; border: 1px solid #e8e8e8;text-align: center; background:#fff;transition: background-color 0.2s ease-in-out;  color: #555;}
  .pageCon .disabled{background-color: #f5f5f5; color: #aaa; cursor: auto;  }

  /* center */
  .pageConC{ float: left; margin-left: 15px; margin-right: 15px;}
  .pageConC li{ margin-left: -1px; float: left; width: 40px; height:38px; line-height: 38px;
    text-align: center;  color: #555; background: #fff;border: 1px solid #e8e8e8;
    transition: background-color 0.2s ease-in-out; user-select: none;}
  .pageConC li:hover{background-color: #f8f8f8; cursor: pointer;}
  .pageConC li.cur{color: #fff; border: 1px solid #ff7300 !important; background: #ff7300 !important;}
  .pageConC li.dot{ border:none; color: #555; margin-left: 1px;}
  /* right */
  .pageConR{ float: left;}
  .pageCon .next{ float: left;}
  .pageConR .inputCon{ float:  left; line-height: 38px; vertical-align: middle; margin-left: 10px;}
  .pageConR li{ float: left; line-height: 40px;}
  .pageConR .jumpInput{height: 22px;  width: 30px;  padding: 0 4px; border: 1px solid #ddd; margin: 0 2px;vertical-align: middle; line-height: 22px;}
  .pageConR .confirmBtn{ margin-left: 10px; height: 38px; line-height: 38px; width: 64px; text-align: center; border: 1px solid #e8e8e8; background-color: #fff;  cursor: pointer; border-radius: 2px; -webkit-border-radius: 2px;}
  .pageConR .confirmBtn:hover{ background-color: #f8f8f8;}

</style>
