<template>
  <div class="container">
    <section class="section">
      <header class="header">基本用法</header>
      <el-collapse>
        <el-collapse-item v-for="(item,index) in listData" :name="item.name" :title="item.title" :key="index">
          {{item.content}}
        </el-collapse-item>

      </el-collapse>
    </section>

    <section class="section">
      <header class="header">手风琴效果</header>
      <el-collapse accordion>
        <el-collapse-item v-for="(item,index) in listData" :name="item.name" :title="item.title" :key="index">
          {{item.content}}
        </el-collapse-item>

      </el-collapse>
    </section>

  </div>
</template>

<script>
  export default {
    name: "collapse-page",
    data() {
      return {
        listData:[
          {title:"一致性 ",name:"test1",content:"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念,,与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念"},
          {title:"反馈  ",name:"test2",content:"控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作,,,k控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作"},
          {title:"效率 ",name:"test3",content:"清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策"},
          {title:"可控 ",name:"test4",content:"结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等,,,结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等"},
        ],
        activeName:['test1']
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
