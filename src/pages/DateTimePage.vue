<template>
  <div class="">
    <div class="section">
      <el-date-picker
          v-model="dateTime1"
          type="datetime"
          placeholder="日期时间"
          >
      </el-date-picker>
    </div>


    <section class="section">
      <el-date-picker
          v-model="dateTime2"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="dateTimeChange2">
      </el-date-picker>
    </section>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        dateTime1:'',
        dateTime2: [],
      }
    },
    computed:{

    },
    methods:{
      dateTimeChange2(val){
        this.dateTime2=val;
      }
    }
  }
</script>

<style scoped>
.section{ margin-top: 20px;}
.header{ font-size: 22px; line-height: 40px;}
.danger{ font-size: 22px; color: #f00; line-height: 40px;}

</style>
