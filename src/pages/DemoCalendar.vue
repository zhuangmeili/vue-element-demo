<template>
  <div class="container">
    <com-calendar></com-calendar>

    <div>我是 bran1分支</div>


    <header>我是在master分支上11111、、、、、</header>
  </div>
</template>

<script>
  import ComCalendar from '../components/ComCalendar';
  export default {
    data() {
      return {}
    },
    components:{ComCalendar }
  }
</script>

<style scoped>
  .container{ width: 500px; margin: 30px auto;}

</style>
