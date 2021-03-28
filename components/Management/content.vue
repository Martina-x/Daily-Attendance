<template>  
<div>    
<!--上排输入框及按钮-->
<el-row :gutter="3">
        <el-col :span="1"><p>对象</p></el-col>
  <el-col :span="5">
      <div class="grid-content bg-purple">
      <div>        
          <el-select v-model="select1" slot="prepend" placeholder="请选择" >
              <el-option label="个人" value="1"></el-option>
              <el-option label="企业" value="2"></el-option> 
          </el-select>   
    </div>
    </div>
    </el-col>
    <el-col :span="1"><p>类型</p></el-col>  
  <el-col :span="5"><div class="grid-content bg-purple">
      <div>
                
          <el-select v-model="select2" slot="prepend" placeholder="请选择">
              <el-option label="时限监察" value="3"></el-option>
              <el-option label="证照信息监察" value="4"></el-option> 
          </el-select> 
       </div></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">
      <el-button type="primary" icon="el-icon-search" @click="getUserList">搜索</el-button>
    </div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">
      <el-button type="primary" >新建监察</el-button>
      </div></el-col>
</el-row>
<!--下方表格-->
<el-table
      :data="userlist"
      style="width: 100%">
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <el-table-column prop="role" label="对象" width="120"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="phone" label="联系方式"></el-table-column>
      <el-table-column label="操作" width="300">
          <template  >
            <el-row>
              <el-button>详情</el-button>
              <el-button type="" @click="pass">通过</el-button>
              <el-button>驳回</el-button>
            </el-row>  
          </template>
      </el-table-column>
      <el-table-column >
          <template slot-scope="scope">
              <!--{{scope.row}}-->
              <!--删除按钮-->
              <el-button  icon="el-icon-delete" circle @click="removeUserById(scope.row.id)" >

              </el-button>
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
        const {data:res} = await this.$http.get('/users',{ 
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

        pass() {
        this.$confirm('确认通过?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '已予以通过!',
        
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '不予以通过'
          });          
        });
      }


        },
    
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
    
    }

</script>


<style Lang="less" scoped>
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
