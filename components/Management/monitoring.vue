<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <span></span>

                
                </div>
            </el-col>
            <el-col :span="6"><div class="grid-content bg-purple">
                <el-card class="box-card">
                   <div>监察编号</div>
                   <div>监察用户</div>
                   <div>监察对象</div>
                </el-card></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            
            </el-row>

    </div>
</template>

<script>

export default {
    data(){
       
    }
}
</script>

<style scoped>

</style>

<style Lang="less" scoped>
span{
     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
     
}

.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
.el-card{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

</style>