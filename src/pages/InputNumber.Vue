<template>
<div>
<el-input-number v-model="number" label="描述文字" :min="1" :max="10"></el-input-number>

</div>
  
</template>
<script>
export default{
  data(){
    return {
      number:1,

    }
  }
}
  
</script>
<style scoped>

</style>
