<template>
  <div class="">
    <section class="calendar">
      <header class="caHead">
        <div class="caHLeft">
          <span class="arrow" @click="prevYear"><i class="el-icon-d-arrow-left"></i></span>
          <span class="arrow" @click="prevMonth"><i class="el-icon-arrow-left"></i></span>
        </div>
        <span class="caHCenter">{{ currentYear }} 年 {{currentMonth}} 月{{currentDay}}日</span>
        <div class="caHRight">
          <span class="arrow" @click="nextMonth"><i class="el-icon-arrow-right"></i></span>
          <span class="arrow" @click="nextYear"><i class="el-icon-d-arrow-right"></i></span>
        </div>
      </header>
      <main class="caMain">
        <ul class="caMRow">
          <li>日</li>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
        </ul>
        <ul class="caMRow Clearfix">
          <li  v-for="(item) in days" :class="{ prev:item.isPrevMonth,next:item.isNextMonth,current:item.value==currentDay&&item.isCurMonth}"><span>{{ item.value }}</span></li>
        </ul>
      </main>
    </section>

  </div>
</template>
<!-- 日历插件 单日历 -->
<script>
  export default {
    data() {
      return {
        currentYear:1970,
        currentMonth:1,
        currentDay:1,
        days:[],//渲染的days
      }
    },
    methods:{
      //初始化calendar
      initCalendar(curDate){
        let now=null;
        if(curDate){
          now=new Date(curDate);
        }else{
          now=new Date();
        }
        this.currentYear=now.getFullYear();
        this.currentMonth=now.getMonth()+1;
        this.currentDay=now.getDate();
        let curMonthLen=new Date(now.getFullYear(),now.getMonth()+1,0).getDate();//获得当月的天数
        let prevMonthLen=new Date(now.getFullYear(),now.getMonth(),0).getDate();
        let nextMonthLen=new Date(now.getFullYear(),now.getMonth()+2,0).getDate();

        let startDay=new Date(now.getFullYear(),now.getMonth(),1).getDay();//获得周
        let endDay=new Date(now.getFullYear(),now.getMonth()+1,1).getDay();//获得最后一天的周

        let curMonthDays=[];
        let prevMonthDays=[];
        let nextMonthDays=[];
        //首先插入当前月份的数据
        for(let i=0;i<curMonthLen;i++){
          curMonthDays[i]={
            isCurMonth:true,
            value:i+1
          }
        }
        //获得上月的信息
        console.log(startDay);
        for(let i=0;i<startDay;i++){
          prevMonthDays[i]={
            isPrevMonth:true,
            value:prevMonthLen-startDay+i+1
          }
        }
        //获得下月的信息
        for(let i=0;i<7-endDay;i++){
          nextMonthDays[i]={
            isNextMonth:true,
            value:i+1
          }
        }
        this.days=prevMonthDays.concat(curMonthDays,nextMonthDays);


      },
      prevYear(){

      },
      prevMonth(){

      },
      nextYear(){

      },
      nextMonth(){

      },
      formateDate(year,month,day){
        var y=year;
        var m=month;
        if(m<10) m = "0" + m;
        var d = day;
        if(d<10) d = "0" + d;
        return y+"-"+m+"-"+d;
      }


    },
    created:function () {
      this.initCalendar(null);//初始化calendar
    }

  }
</script>

<style scoped>
  .calendar{width: 322px; box-shadow: 1px 1px 3px rgba(0,0,0,0.5); color: #606266;}
  /* header */
  .caHead{ padding: 12px; line-height: 30px; height: 30px; text-align: center; }
  .caHead .arrow{ font-size: 14px; color: #777; padding: 0 5px; cursor: pointer;}
  .caHLeft{ float: left;}
  .caHRight{ float: right;}

  /* content */
  .caMain{ font-size: 12px;}
  .caMRow{}
  .caMRow li{ float: left; width: 46px; text-align: center; line-height: 24px; padding:3px 0;cursor: pointer;}
  .caMRow li:not(.prev):not(.next):hover{ color: #f60; }
  .caMRow li.prev,.caMRow li.next{ color: #c0c4cc;}
  .caMRow li.disabled{ cursor: not-allowed; color: #c0c4cc;}
  .caMRow li.current{}
  .caMRow li.current span{ display: inline-block; width: 24px;  height: 24px;color: #fff; background: #f60;  border-radius: 50%; text-align: center;}

</style>
