<template>
<el-container>
  <!--顶栏-->
  <el-header>行政审批系统</el-header>
  
  <el-container>
    <!--侧边栏-->
    <el-aside width="170px">
      <button @click="logout">退出登录></button>
    <!--菜单区域-->
    <el-menu active-text-color= "#2d9af4" :router="true" 
    :default-active="activePath"><!--开启router模式，此处当成属性格式写，也可以直接写作“router”。为整个侧边栏开启路由模式。-->
      <!--一级菜单区域-->
      <!--为该菜单增加唯一的index值，防止相互干扰。要注意到index只接受字符串，不接受数值-->
       <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id" >
        <template slot="title">
          <!--图标-->
          <i class="iconfont icon-users"></i>
          <!--菜单大标题一-->
          <span>{{item.authName}}</span>
        </template>
        
        <!--二级菜单-->
        <el-menu-item :index="subItem.path" 
        v-for="subItem in item.children" :key="subItem.id"
        @click="saveNavState('subItem.path')">
          <template slot="title">
            <!--图标-->
            <i class="el-icon-edit-outline"></i>
            <!--菜单小标题-->
            <span>{{subItem.authName}}</span>   
          </template>
        </el-menu-item>
       </el-submenu>
    </el-menu>
    </el-aside>
    
    <!--主体区域-->
    <el-main>
      <!--路由占位符-->
      <router-view></router-view>
      



    </el-main>
  </el-container>
</el-container>

</template>



<script>
export default {
  //配置好axios请求拦截器之后，定义生命周期函数
  created(){
    this.getMenuList()
    this.activePath = window.seesionStorage.getItem('activePath')

  },
    data() {
    return {
      tabPosition: 'left',
      //左侧菜单数据(默认是空)     
      menulist:[],   //用菜单文本的id作指示
      
      //被激活的链接地址
      activePath:'',

    };
  },
    
    
    methods:{
        logout(){
            //清空token
            window.sessionStorage.clear();
            //跳转到登录页
            this.$router.push('/login');
        },
        

        



        //获取所有的菜单
        async getMenuList(){
          const{data:res} =  await this.$http.get('/menus') //然后挂载到上面的data中
          if(res.meta.status !== 200) return this.$message.error(res.meta.msg) //失败时,错误消息一定是在meta上保存，所以前面多一个meta.
          this.menulist = res.data //成功获取(接口数据设置的是数组，同上面对menuist的定义一致)
          console.log(res.data)
        },
        
        //保存链接的激活状态
        saveNavState(activePath) {
          window.sessionStorage.setItem('activePath',activePath)
          this.activePath = activePath
          },



    }
};


</script>

<style Lang="less" scoped>
/*当作类名*/
.el-container{
  background-color: #eeeeee;
  height: 100%;
}
.el-header{
    background-color: #1989fa;
    color: white;
    font-size: 25px;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

.el-aside{
  background-color: white;
  margin-left: 50px;
  margin-top: 40px;
  margin-bottom: 60px;
  border-radius: 10px;
  
}
.el-menu{
  text-align: center,
 
}
/*拉开图标和文本的距离 */
.iconfont{
  margin-right: 10px;
}


button{
        background-color:#5555FF;
        color: white;
    		border:none;
        outline:none;
        font-size: 10px;
        border-radius:5px;
        margin-top: 100px;
        display:block;
        margin:20px auto
      }
.el-main{
  background-color: white;
  margin-right: 30px;
  margin-left: 20px;
  margin-top: 40px;
  margin-bottom: 60px;
  border-radius: 10px;
  
}
</style>