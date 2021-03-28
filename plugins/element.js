import Vue from 'vue'


import { 
    Form, FormItem,Button,Input,Message,Container,Header,Aside,Main,
    Row,Col,RadioGroup,RadioButton,Tabs,TabPane,Menu,Submenu,MenuItemGroup,
    MenuItem,Progress,Timeline,TimelineItem,Upload,Option,Select,Table,
    TableColumn,Pagination,Step,Steps,Avatar,Card,
    
    MessageBox
} 
from 'element-ui'


//注册为全局组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)

Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)

Vue.use(Progress)

Vue.use(Timeline)
Vue.use(TimelineItem)

Vue.use(Upload)

Vue.use(Option)
Vue.use(Select)

Vue.use(Table)
Vue.use(TableColumn)

Vue.use(Step)
Vue.use(Steps)


Vue.use(Pagination)

Vue.use(Avatar)

Vue.use(Card)







//需要进行全局挂载，其中￥message是一个自定属性可以随意改名字，后面的Message则不能随便写
Vue.prototype.$message=Message

Vue.prototype.$confirm=MessageBox.confirm

Vue.prototype.$prompt=MessageBox.prompt



