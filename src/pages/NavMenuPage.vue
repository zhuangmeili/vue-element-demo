<template>
  <div class="">
    <section class="section">
      <el-menu 
      :default-active="activeIndex" 
      mode="horizontal"
       @select="selectChange"
       background-color="#555"
       text-color="#fff"
       active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">我的工作台</template>
          <el-menu-item index="1-1">工作1</el-menu-item>
          <el-menu-item index="1-2">工作2</el-menu-item>
          <el-menu-item index="1-3">工作3</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">处理中心</el-menu-item>
        <el-menu-item index="3">工作管理</el-menu-item>
        <el-menu-item index="4">登录注册</el-menu-item>
      </el-menu>
    </section>

    <section class="section" style="width:300px;">
      <header class="header">垂直菜单，可以内嵌子菜单,注意 span  slot="title"</header>
      <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu 
      :default-active="activeIndex2"
      @open="openMenu"
      @close="closeMenu"
      background-color="#555"
      text-color="#fff"
      :collapse="isCollapse"
      active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-search"></i>
            <span  slot="title">导航一</span>
          </template>
          <!-- group1 -->
          <el-menu-item-group>
            <template slot="title">分组1</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <!-- group2 -->
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">子项4-1</el-menu-item>
          </el-submenu> 
        </el-submenu>
        <el-menu-item index="2"> <i class="el-icon-menu"></i> <span slot="title">导航二</span></el-menu-item>
        <el-menu-item index="3"> <i class="el-icon-setting"></i><span  slot="title">导航三</span></el-menu-item>
      </el-menu>
    </section>
  </div>
</template>

<script>
  export default {
    name: "nav-menu-page",
    data() {
      return {
        activeIndex:'2',//String 当前选中的索引
        activeIndex2:'2',//String 当前选中的索引
        isCollapse:true,
      }
    },
    methods:{
      selectChange(key,keyPath){
        console.log(key+"    "+keyPath);  //1-1      1，1-1
      },
      openMenu(key,keyPath){
        console.log("open:"+key+"    "+keyPath);  //1-1      1，1-1
      },
      closeMenu(key,keyPath){
        console.log("close:"+key+"    "+keyPath);  //1-1      1，1-1
      }
    }
  }
</script>

<style scoped>
.container{ width: 1000px; margin: 0 auto;}
.section{ margin-top: 20px;}
.header{ line-height: 40px;}
.red{ color: red}
</style>
