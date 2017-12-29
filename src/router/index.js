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
const AlertPage = () => import('@/pages/AlertPage')
const LoadingPage = () => import('@/pages/LoadingPage')

const MessaagePage = () => import('@/pages/MessaagePage')
const MessageBoxPage = () => import('@/pages/MessageBoxPage')
const NotificationPage = () => import('@/pages/NotificationPage')

const NavMenuPage = () => import('@/pages/NavMenuPage')
const TabsPage = () => import('@/pages/TabsPage')
const DropDownPage = () => import('@/pages/DropDownPage')

const StepsPage = () => import('@/pages/StepsPage')
const DialogPage = () => import('@/pages/DialogPage')
const PopoverPage = () => import('@/pages/PopoverPage')
const CardPage = () => import('@/pages/CardPage')
const CollapsePage = () => import('@/pages/CollapsePage')

//pc端自己封装的组件
const DemoPaginate=()=>import('@/pages/DemoPaginate')

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/demoPaginate', name: 'DemoPaginate', component: DemoPaginate,title:"自己写的分页插件" },



    { path: '/', name: 'Home', component: Home ,title:"首页"},
    { path: '/layout', name: 'Layout', component: Layout,title:"布局" },
    { path: '/container', name: 'Container', component: Container,title:"布局容器" },
    { path: '/buttonPage', name: 'ButtonPage', component: ButtonPage,title:"按钮" },
    { path: '/radioPage', name: 'RadioPage', component: RadioPage,title:"单选" },
    { path: '/checkbox', name: 'Checkbox', component: Checkbox,title:"复选" },
    { path: '/inputPage', name: 'InputPage', component: InputPage,title:"输入框" },
    { path: '/inputNumber', name: 'InputNumber', component: InputNumber,title:"计数器" },
    { path: '/selectPage', name: 'SelectPage', component: SelectPage,title:"选择器" },
    { path: '/timePage', name: 'TimePage', component: TimePage,title:"时间选择器" },
    { path: '/datePage', name: 'DatePage', component: DatePage,title:"日期选择器" },
    { path: '/dateTimePage', name: 'DateTimePage', component: DateTimePage,title:"日期时间选择器" },
    { path: '/uploadPage', name: 'UploadPage', component: UploadPage,title:"上传" },
    { path: '/ratePage', name: 'RatePage', component: RatePage,title:"评分" },
    { path: '/formPage', name: 'FormPage', component: FormPage,title:"form表单" },
    { path: '/formVerify', name: 'FormVerify', component: FormVerify,title:"表单验证" },
    { path: '/formVerifyDefine', name: 'FormVerifyDefine', component: FormVerifyDefine,title:"自定义验证规则" },
    { path: '/formDynamic', name: 'FormDynamic', component: FormDynamic,title:"动态增加表单项" },
    { path: '/tablePage', name: 'TablePage', component: TablePage,title:"table表格" },
    { path: '/progressBadge', name: 'ProgressBadge', component: ProgressBadge,title:"进度条 /标记" },
    { path: '/paginationPage', name: 'PaginationPage', component: PaginationPage,title:"分页" },
    { path: '/alertPage', name: 'AlertPage', component: AlertPage,title:"Alert警告" },
    { path: '/loadingPage', name: 'LoadingPage', component: LoadingPage,title:"loading加载" },

    { path: '/messaagePage', name: 'MessaagePage', component: MessaagePage,title:"消息提示" },
    { path: '/messageBoxPage', name: 'MessageBoxPage', component: MessageBoxPage,title:"弹框" },
    { path: '/notificationPage', name: 'NotificationPage', component: NotificationPage,title:"通知" },

    { path: 'navMenuPage', name: 'NavMenuPage', component: NavMenuPage,title:"导航菜单" },
    { path: '/tabsPage', name: 'TabsPage', component: TabsPage,title:"tabs标签栏" },
    { path: '/dropDownPage', name: 'DropDownPage', component: DropDownPage,title:"下拉菜单" },


    { path: '/stepsPage', name: 'StepsPage', component: StepsPage,title:"导航菜单" },
    { path: '/dialogPage', name: 'DialogPage', component: DialogPage,title:"tabs标签栏" },
    { path: '/popoverPage', name: 'PopoverPage', component: PopoverPage,title:"弹出框" },
    { path: '/cardPage', name: 'CardPage', component: CardPage,title:"卡片" },
    { path: '/collapsePage', name: 'CollapsePage', component: CollapsePage,title:"折叠面板" },


  ]
})
