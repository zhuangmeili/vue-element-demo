<template>
  <div class="container">
    <section class="section">
      <header class="header">简单的步骤条 1、active参数，当前的步骤数 ；2、 space 参数 Number类型，固定的一步的宽度</header>

      <el-steps  :active="activeStep" finish-status="success" :space="200">
        <el-step title="步骤1"></el-step>
        <el-step title="步骤2"></el-step>
        <el-step title="步骤3"></el-step>
      </el-steps>
      <el-button type="primary" @click="nextStep">下一步</el-button>

    </section>

    <section class="section">
      <header class="header">含状态的步骤 1、title属性设置；2、带有描述; 1、 align-center</header>
      <el-steps  :active="activeStep" finish-status="success" :space="200" align-center >
        <el-step title="开始" description="现在开始开始，描述"></el-step>
        <el-step title="进行中" description="进行中描述描述"></el-step>
        <el-step title="已完成" description="完成描述"></el-step>
      </el-steps>
      <el-button type="primary" @click="nextStep">下一步</el-button>
    </section>
    

    <section class="section">
      <header class="header">简介风格的步骤条  设置 simple 可应用简洁风格，该条件下
         align-center / description / direction / space 都将失效。 </header>
      <el-steps  :active="activeStep" finish-status="success"  simple >
        <el-step title="步骤1" icon="el-icon-edit" ></el-step>
        <el-step title="步骤2" icon="el-icon-upload"></el-step>
        <el-step title="步骤3" icon="el-icon-picture"></el-step>
      </el-steps>
      <el-button type="primary" @click="nextStep">下一步</el-button>
    </section>


    <section class="section">
      <header class="header">process-status 当前步骤的状态</header>
      <el-steps  :active="activeStep" finish-status="success" :space="200" 
      align-center process-status="error">
        <el-step title=""></el-step>
        <el-step title=""></el-step>
        <el-step title="" ></el-step>
      </el-steps>
      <el-button type="primary" @click="nextStep">下一步</el-button>
    </section>



    <section class="section">
      <header class="header">带有图标；2、icon属性</header>
      <el-steps  :active="activeStep" finish-status="success" :space="200" direction="vertical"  >
        <el-step title="步骤1" icon="el-icon-edit" description="这是描述，哈哈哈哈哈哈"></el-step>
        <el-step title="步骤2" icon="el-icon-upload"></el-step>
        <el-step title="步骤3" icon="el-icon-picture"></el-step>
      </el-steps>
      <el-button type="primary" @click="nextStep">下一步</el-button>

    </section>
 
  </div>
</template>

<script>
  export default {
    name: "steps-page",
    data() {
      return {
        activeStep:0,//当前的步骤数
      }
    },methods:{
      nextStep(){
        if(this.activeStep++>2){
          this.activeStep=0;
        }
        console.log(this.activeStep);//0 1 2 3
      }
    }
  }
</script>

<style scoped>
  .container{ width: 1000px; margin: 0 auto;}
  .section{ margin-top: 20px;}
  .header{ line-height: 40px;}
</style>
