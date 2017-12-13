<template>
  <div class="container">
    <ul>
      <router-link :to="item.path" v-for="(item,index) in routes" tag="li">
        {{item.name}}
      </router-link>

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
  .container{ font-size: 28px; width: 1000px; margin: 30px auto; text-decoration: underline;}

</style>
