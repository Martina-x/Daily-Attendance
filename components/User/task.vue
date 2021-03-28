<template>  
<div>    
<!--下方表格-->
<h2>任务列表</h2>
<el-table
      :data="userlist"
      style="width: 100%">
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column  label="状态"></el-table-column>
      <el-table-column label="操作" width="300">
          <template  >
            <el-row>
              <el-button type="primary">详情</el-button>
              <el-button type="danger" @click="open">投诉</el-button>
              
            </el-row>  
          </template>
      </el-table-column>



    </el-table>
    
    <!--分页区域-->
    <el-pagination
      @size-change="handleSizeChange" 
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[9]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

</div>
</template>


<script>
export default {
    data() {
        return{
            select1: '',
            select2: '',
            //获取用户列表的参数对象(定义一个queryInfo)
            queryInfo: {
                query:'',
                //当前页数
                pagenum:1,
                //当前每页显示多少数据
                pagesize:2, //不起作用？
            },
            userlist:[],
            total:0

        }
            
    },

    created(){
        this.getUserList()
    
    
    },

    methods: {
      async getUserList(){
        const {data:res} = await this.$http.get('/users/1',{ 
              params:this.queryInfo
        })
        if(res.meta.status !==200){
            return this.$message.error('获取用户列表失败！')
        }
        //赋值
        this.userlist = res.data.users
        this.total = res.data.totalpage
        console.log(res)
             
        },

        //pass(){


        //},
    
      //监听 pagesize 改变的时间
      handleSizeChange(newSize){
          console.log(newSize)
          this.queryInfo.pagesize = newSize
          this.getUserList()
      },

      //监听页码值改变的事件
      handleCurrentChange(newPage){
          console.log(newPage)
          this.queryInfo.pagenum = newPage
          this.getUserList()
      },

      //根据id删除用户信息
      //removeUserById(){
          //console.log(id)
      //}

      //投诉
      open() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '提交成功' 
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '提交失败'
          });       
        });
      }
    }

      }
    


</script>


<style Lang="less" scoped>
h2{
    color: royalblue;
    text-align: center;
}

p {
    margin-right: 10px;
    margin-top: 10px;
    color: #5555FF;
    font-weight:bold;
    font-size: 18px;
    
}


.el-table{
    margin-top: 3px;
    
}
</style>
