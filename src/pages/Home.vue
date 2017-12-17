<template>
  <div class="container">
    <header class="header">
      <span class="no">级联选择器（未看）</span>
      <span class="no">树形控件（未看）</span>
      <span class="already">swicth</span>
      <span class="already">slider</span>
      <span class="no">upload 未看</span>
    </header>
    <ul>
      <li v-for="(item,index) in routes"  :key="index">
        <router-link :to="item.path">
          {{item.name}} {{item.title}}
        </router-link>
      </li>

    </ul>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return {
        routes:[],
      }
    },
    mounted(){
      this.routes=this.$router.options.routes;
    }
  }
</script>
<style scoped="scoped">
.container{ width: 500px; margin: 30px auto;}
.container a{ display: inline-block; font-size: 20px; color:#333;line-height: 50px;text-decoration: underline;}
.header span{ display: inline-block; margin: 5px 5px; line-height: 30px; padding: 0 20px; border-radius: 4px;}
.header .already{ background: #999; color: #fff;}
.header .no{ background: #f00; color: #fff;}
</style>
