<template>
  <div class="container">
    <section class="section1">
      <!-- 需要number类型 -->
      <header class="header ">属性 status="success\exception" </header>
      <el-progress :percentage="40"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="70" status="exception"></el-progress>
      <!-- -->
      <header class="header ">属性 stroke-width   text-inside</header>
      <el-progress :percentage="40" :stroke-width="20" text-inside ></el-progress>
      <!--   -->
      <header class="header ">环形进度条 ：属性 type="circle" width 画布大小 </header>
      <el-progress type="circle" :percentage="20" :stroke-width="10"  ></el-progress>
      <el-progress type="circle" :percentage="20" :stroke-width="10" :width="100"  ></el-progress>

    </section>

    <section>
      <header class="header">Badge</header>
      <el-badge value="12">
        <el-button type="" size="mini">评论</el-button>
      </el-badge>
      <header class="header">Badge 必须写 <span class="danger">slot="dropdown"</span> </header>
      <el-dropdown>
        <span>点我查看 <i class="el-icon-caret-bottom"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            评论
            <el-badge :value="10"></el-badge>
          </el-dropdown-item>
          <el-dropdown-item>
            回复
            <el-badge :value="10"></el-badge>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <header class="header">最大值 max</header>
      <el-badge :value="12" :max="10">
        <el-button type="" size="mini">评论</el-button>
      </el-badge>
      <header class="header">自定义内容  value</header>
      <el-badge value="new">
        <el-button type="" size="mini">评论</el-button>
      </el-badge>
      <header class="header">小红点  is-dot</header>
      <el-badge :is-dot="true">
        <el-button type="" size="mini">评论</el-button>
      </el-badge>

    </section>

  </div>
</template>

<script>
  export default {
    name: "progress-badge",
    data() {
      return {}
    }
  }
</script>

<style scoped>
.container{ width: 1000px; margin: 0 auto;}
.section1{ width: 400px;}
.header{ line-height: 40px; margin-top: 20px;}
.danger{ color: red;}

</style>
