<template>
  <div class="container">
    <com-calendar></com-calendar>
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
