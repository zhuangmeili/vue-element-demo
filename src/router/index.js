import Vue from 'vue'
import Router from 'vue-router'
//所有路径
const Home = () => import('@/pages/Home')
const Layout = () => import('@/pages/Layout')
const Container = () => import('@/pages/Container')
const ButtonPage = () => import('@/pages/ButtonPage')
const RadioPage = () => import('@/pages/RadioPage')
const Checkbox = () => import('@/pages/Checkbox')
const InputPage = () => import('@/pages/InputPage')
const InputNumber = () => import('@/pages/InputNumber')
const SelectPage = () => import('@/pages/SelectPage')
const TimePage = () => import('@/pages/TimePage')
const DatePage = () => import('@/pages/DatePage')
const DateTimePage = () => import('@/pages/DateTimePage')
const UploadPage = () => import('@/pages/UploadPage')
const RatePage = () => import('@/pages/RatePage')
const FormPage = () => import('@/pages/FormPage')
const FormVerify = () => import('@/pages/FormVerify')
const FormVerifyDefine = () => import('@/pages/FormVerifyDefine')
const FormDynamic = () => import('@/pages/FormDynamic')
const TablePage = () => import('@/pages/TablePage')
const ProgressBadge = () => import('@/pages/ProgressBadge')
const PaginationPage = () => import('@/pages/PaginationPage')





Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home ,title:"首页"},
    { path: '/layout', name: 'Layout', component: Layout,title:"布局" },
    { path: '/container', name: 'Container', component: Container,title:"布局容器" },
    { path: '/button', name: 'ButtonPage', component: ButtonPage,title:"按钮" },
    { path: '/radio', name: 'RadioPage', component: RadioPage,title:"单选" },
    { path: '/checkbox', name: 'Checkbox', component: Checkbox,title:"复选" },
    { path: '/input', name: 'InputPage', component: InputPage,title:"输入框" },
    { path: '/inputnumber', name: 'InputNumber', component: InputNumber,title:"计数器" },
    { path: '/select', name: 'SelectPage', component: SelectPage,title:"选择器" },
    { path: '/timepage', name: 'TimePage', component: TimePage,title:"时间选择器" },
    { path: '/datepage', name: 'DatePage', component: DatePage,title:"日期选择器" },
    { path: '/datetimepage', name: 'DateTimePage', component: DateTimePage,title:"日期时间选择器" },
    { path: '/uploadpage', name: 'UploadPage', component: UploadPage,title:"上传" },
    { path: '/ratepage', name: 'RatePage', component: RatePage,title:"评分" },
    { path: '/formpage', name: 'FormPage', component: FormPage,title:"form表单" },
    { path: '/formverify', name: 'FormVerify', component: FormVerify,title:"表单验证" },
    { path: '/formverifydefine', name: 'FormVerifyDefine', component: FormVerifyDefine,title:"自定义验证规则" },
    { path: '/formdynamic', name: 'FormDynamic', component: FormDynamic,title:"动态增加表单项" },
    { path: '/tablepage', name: 'TablePage', component: TablePage,title:"table表格" },
    { path: '/progressbadge', name: 'ProgressBadge', component: ProgressBadge,title:"进度条 /标记" },
    { path: '/pagination', name: 'PaginationPage', component: PaginationPage,title:"分页" },



  ]
})
