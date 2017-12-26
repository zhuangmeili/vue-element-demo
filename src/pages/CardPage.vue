<template>
  <div class="container">
    <section>
      <header class="header"></header>
      <el-card class="cardBox">
        <header slot="header">
          <span>卡片名称</span>
          <el-button type="text" class="FR" size="mini">操作按钮</el-button>
        </header>
        <ul>
          <li v-for="item in lists">{{item.text}}</li>
        </ul>
      </el-card>


    </section>
    <section>
      <header class="header"></header>
      <el-card class="listItem">
        <img class="image" src="../assets/image/5.jpg" alt="">
        <div class="content">
          最美的风景
        </div>
        
      </el-card>
    </section>

  </div>
</template>

<script>
  export default {
    name: "card-page",
    data() {
      return {
        lists:[
          {text:"item1"},
          {text:"item2"},
          {text:"item3"},
          {text:"item4"}
        ]
      }
    }
  }
</script>

<style scoped>
.container{ width: 1000px; margin: 0 auto;}
.section{ margin-top: 20px;}
.header{ line-height: 40px;}
.red{ color: red}
.cardBox{ width: 300px;}

.listItem{width: 300px; }
.listItem .image{ display: block; width: 100%; height: 250px;}
.listItem .content{ padding: 14px;}
</style>
