<template>
    <div id="login" >
	<form>		
        <h2 style="text-align: center;">注册</h2><br/><br/>
        <input class="login_input" name="user" type="text" autofocus placeholder="请输入用户名" autocomplete="off"/><br/><br/>
        <input class="login_input" name="password" type="password"  placeholder="请输入密码"/><br/><br/>
        <input class="login_input" name="real_name" type="text" placeholder="请输入真实姓名"/><br/><br/>
        <input class="login_input" name="phone_number" type="text" placeholder="请输入联系方式"  /><br/><br/>
        <input id="login_submit" type="submit" value="注册" style="margin-left: 20px" />
    </form>
    </div>
</template>

<script>

export default {
    
        

}
</script>

<style Lang="less" scoped>
		.login_input{
			width: 300px; 
        	height:20px; 
        	border:none; 
        	outline: none;        	
        	border-bottom:1px solid grey;
        		

		}
		
		#login{
			
			position: absolute;
            left: 50%;
            top: 50%; 
            transform: translate(-50%,-50%);


		}
		#login_submit{
			margin-top: 20px;
			background-color:#2894FF;
			border-radius:15px;
			border:none;
			outline: none;
			width: 200px;
			height: 35px;
		}

</style>
