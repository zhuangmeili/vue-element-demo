<template>
  <div class="container">
    <section class="section">
      <header class="header">基础用法</header>
      <el-tabs @tab-click="tabClick" v-model="activeName">
        <el-tab-pane label="用户管理" name="item1">
          <div>
            用户管理的内容，哈哈第三方水电费胜多负少防守打法是否收到是否
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="item2">
          <div>配置管理的内容。胜多负少父水电费sd</div>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="item3">
          <div>觉得管理的内容，胜多负少的水电费第三方水电费水电费水电费父方式</div>
        </el-tab-pane>
        <el-tab-pane label="其他管理" name="item4">
          <div>其它管理，舒服舒服是否水电费水电费爽肤水的佛挡杀佛是是是</div>
        </el-tab-pane>
      </el-tabs>

    </section>
    <section class="section">
      <header class="header">选项卡样式 type="card ||border-card"</header>
      <el-tabs  v-model="activeName" type="card"  >
        <el-tab-pane label="用户管理" name="item1">
          <div>
            用户管理的内容，哈哈第三方水电费胜多负少防守打法是否收到是否
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="item2">
          <div>配置管理的内容。胜多负少父水电费sd</div>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="item3">
          <div>觉得管理的内容，胜多负少的水电费第三方水电费水电费水电费父方式</div>
        </el-tab-pane>
        <el-tab-pane label="其他管理" name="item4">
          <div>其它管理，舒服舒服是否水电费水电费爽肤水的佛挡杀佛是是是</div>
        </el-tab-pane>
      </el-tabs>
    </section>

    <section class="section">
      <header class="header"> label自定义// tab-position</header>
      <el-tabs  v-model="activeName" tab-position="left">
        <el-tab-pane name="item1">
          <span slot="label">
            <i class="el-icon-date"></i>用户管理
          </span>
          <div>
            用户管理的内容，哈哈第三方水电费胜多负少防守打法是否收到是否
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="item2">
          <div>配置管理的内容。胜多负少父水电费sd</div>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="item3">
          <div>觉得管理的内容，胜多负少的水电费第三方水电费水电费水电费父方式</div>
        </el-tab-pane>
        <el-tab-pane label="其他管理" name="item4">
          <div>其它管理，舒服舒服是否水电费水电费爽肤水的佛挡杀佛是是是</div>
        </el-tab-pane>
      </el-tabs>

    </section>

    <section class="section">
      <header class="header">选项卡样式 type="card " 动态增减标签</header>
      <el-tabs  v-model="activeName2" type="card" editable  @edit="tabsEdit" >
        <el-tab-pane v-for="(item,index) in tabsData" :label="item.label" :name="item.name" :key="item.index">
          {{item.content}}
        </el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>

<script>
  export default {
    name: "tabs-page",
    data() {
      return {
        activeName:'item2',//当前选中的项目

        tabsData:[{
          label: '用户管理',
          name: 'item1',
          content: '用户管理的 contentxxxx'
        },{
          label: '配置管理',
          name: 'item2',
          content: '配置管理的 contentxxxx'
        },{
          label: '角色管理',
          name: 'item3',
          content: '角色管理的 content xxxx'
        }],
        activeName2:'item2',

      }
    },
    methods:{
      tabClick(val){
        console.log(val);
      },
      tabsEdit(targetName,action){
        /*
        targetName: //返回的是name值  item1 item2 item3
        action:     //'add'  || remove

        */
        //console.log(targetName+","+action); 
        let nextIndex=this.tabsData.length+1;
        if(action==='add'){
          let newTabName=`item${nextIndex}`;
          this.tabsData.push({
            label:`newTab${nextIndex}`,
            name:newTabName,
            content:`newTab${nextIndex} content`
          });

        }
        if(action==='remove'){
          let tabs=this.tabsData;
          var len=tabs.length;
          tabs.forEach((item,index)=>{
            if(item.name==targetName){ 
              //下一个选中的tab 要么是前一个要么是后一个tabItem
              let nextTab=this.tabsData[index+1] || this.tabsData[index-1] 
              console.log(nextTab);
              if(nextTab){
                this.activeName2=nextTab.name;
              }
              console.log(this.activeName2);
              this.tabsData.splice(index,1);
            }
          })
        }
      }

    },
  }
</script>

<style scoped>
.container{ width: 1000px; margin: 0 auto;}
.section{ margin-top: 20px;}
.header{ line-height: 40px; background: #eee;}
.red{ color: red}

</style>
