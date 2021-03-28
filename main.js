import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入全局样式
import './assets/css/global.css'

//能够使用element ui的关键啊啊啊啊！
import 'element-ui/lib/theme-chalk/index.css'

//导入iconfont文件，进而可以使用其图标
import './assets/fonts/iconfont.css'

//全局配置axios
import axios from 'axios'  //1.先引入这个包
//3.配置请求的根路径
axios.defaults.baseURL = 'https://www.fastmock.site/mock/360bae8efb95290b34e251e4d1e2e897/system'    
//3.挂载完原型的属性之后，尽量再为axios设置请求的根路径

axios.interceptors.request.use(config => {
  console.log(config)
  //对config做预处理
  config.headers.Authorization = window.sessionStorage.getItem('token')
  //在最后必须return config
  return config
})

Vue.prototype.$http = axios;  
//2.把这个包挂载到Vue的原型对象上，这样的话，每一个Vue的组件都可以通过this访问到$http,从而发起axios请求




// 请求响应超时时间
axios.defaults.timeout = 5000;





Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



