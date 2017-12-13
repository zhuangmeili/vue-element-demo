import Vue from 'vue'
import Router from 'vue-router'
//所有路径
const Home = () => import('@/pages/Home')





Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home }
  ]
})
