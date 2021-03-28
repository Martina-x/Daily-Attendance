<template>
    <div>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6"><div class="grid-content bg-purple">
          <el-progress type="circle" :percentage="50" :width="250" :stroke-width="10" ></el-progress>   
        </div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light">
            <div style="height: 300px;">
              <el-steps direction="vertical" >
                <el-step title="用户名:" description=""></el-step>
                <el-step title="真实姓名：" description=""></el-step>
                <el-step title="联系方式" ></el-step>
              </el-steps>
            </div>
        </div>
        </el-col>
          <el-col :span="6">
            <el-avatar :size="300" :src="circleUrl"></el-avatar>
          </el-col>  
       
       <div class="grid-content bg-purple">
        </div>
      </el-row>
    </div>


        
            
            
</template>

<script>

export default {
    data(){
        return{
          circleUrl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1903184981,2138634562&fm=26&gp=0.jpg",

        }
    }
    
}
</script>

<style Lang="less" scoped>

.el-progress{
    margin-left: 80px;
    margin-top: 130px;
    
}

.el-steps{
    margin-top:100px;
    margin-left: 50px;
    margin-right: 50px;
}

.el-avatar{
    margin-top: 100px;
}
</style>
