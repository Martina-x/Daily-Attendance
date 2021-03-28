<template>
<div class="login_container">
    <div class="login_box">           
            <!--左侧插图-->
            <div class="picture">
                <img src="../picture/1.png" alt="">     
            </div>
            <!--登录表单区-->
            <el-form  ref="loginFormRef" :model="loginForm"  label-width="0px" class="login_form">              
              <!--用户名-->
              <el-form-item >
                 <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user" placeholder="请输入账号">
                 </el-input>
              </el-form-item>
              <!--密码-->
              <el-form-item >
                 <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" placeholder="请输入密码" type="password">
                 </el-input>
              </el-form-item>
              <!--勾选是否记住-->
              <span>
		    		  <input type="checkbox" name="remembersuername" value="1">
		    	     <label for="remembersuername"><small>记住账号</small></label>
		    	   </span>
               <br><br>
              <!--按钮区域-->
              <el-form-item class="btns" >
                 <el-button type="primary" @click="admin_login">管理员登录</el-button>
                 <el-button type="primary" @click="user_login">用户登录</el-button>
              <a href="/register">
              <el-button type="info" >先去注册</el-button>
              </a>
              </el-form-item>
            </el-form>
        </div>
    </div>
  
</template>

<!--不同于挤在同一个文件中的vue框架，下面两个引用貌似可有可无-->
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!--官网提供的axios在线网址-->
<script src="http://unpkg.com/axios/dist/axios.min.js"></script>


<script>


//import func from 'vue-editor-bridge';
export default {
   data(){
      return {
         //这里是登陆表单的数据绑定对象,已经可以由：model实现数据双向绑定 
         loginForm:{
           username:'',
           password:'',
           
        }
      };
   },
   methods:{
      //点击登录进行校验
      admin_login(){
         this.$refs.loginFormRef.validate(async valid => {
            if(!valid) return;
            //valid一般默认是true
            //为了不返回promise而增加async和await
            //从返回的对象身上只提取data属性，并且将其命名为res（解构赋值）
            const {data:res}  = await this.$http.post('/login_check',this.loginForm);
            //data中还有data
            if (res.data.verifysuccess === false) return this.$message.error('登陆失败');
            this.$message.success('登陆成功');  
            
            //将登陆成功之后的（服务器分配的）token 保存到客户端的sessionStorage中
            console.log(res);
            //调用sessionStorage保存token
            window.sessionStorage.setItem('token',res.data.token)
            //通过编程式导航挑战到后台主页，其路由地址是/home
            this.$router.push('/Home');         
         });
         
      },
      user_login(){
         this.$refs.loginFormRef.validate(async valid => {
            if(!valid) return;
            //valid一般默认是true
            //为了不返回promise而增加async和await
            //从返回的对象身上只提取data属性，并且将其命名为res（解构赋值）
            const {data:res}  = await this.$http.post('/login_check2',this.loginForm);
            //data中还有data
            if (res.data.verifysuccess === false) return this.$message.error('登陆失败');
            this.$message.success('登陆成功');  
            
            //将登陆成功之后的（服务器分配的）token 保存到客户端的sessionStorage中
            console.log(res);
            //调用sessionStorage保存token
            window.sessionStorage.setItem('token',res.data.token)
            //通过编程式导航挑战到后台主页，其路由地址是/home
            this.$router.push('/Home_user');         
         })
      },

         
  } 

};              




 
</script>


<!--推荐lang="less"这个，可以帮助我们快速生成样式节点-->
<!--表示支持less语法格式，scoped表示样式     只在当前组件内生效，起到区间的作用；
如果去掉，则会全局生效；只要文件为单文件标签即后缀为.vue，都使用scoped，
从而防止组件之间的样式冲突-->
<!--要使用less的语法，就要记得配置less相关的loader-->
<style Lang="less" scoped>
.login_container{
   background-image:url("../picture/2.png");
   background-repeat:no-repeat; 
   background-size:100% 100%; 
   background-attachment:fixed;
   height: 100%;
}



.login_box {
    width: 750px;
    height: 400px;
    background-color: #fff;
    border-radius: 15px;
    position: absolute; /*是为了进行页面上的位移*/
    left: 50%;
    top:50%;  /*距离顶部和左部各偏离50%*/
    transform: translate(-50%,-50%);
    /*方框的左上角移动到中央，所以要减去长高的一半修正位置 */
    /*脱离文档流，使其不在父元素占宽高，父元素没有大小*/
    }
   img{
      height: 30%;
      width: 30%;
      margin-left: 10%;
      margin-top: 10%;
   }
   .login_form{
      margin-left: 45%;
      width:350px;
      position: absolute;
      
      top:-10%;
      padding-block: 20%;
      
   }
   .btns{
      display: flex;
      justify-content:center;
      
   }




</style>
