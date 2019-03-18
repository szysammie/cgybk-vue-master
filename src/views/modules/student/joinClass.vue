<template>
  <el-dialog
    title="加入课堂"
    width="30%"
    :visible.sync="dialogVisible"
    >
    <span>输入课堂号加入课堂：</span>
    <el-input v-model="classId" placeholder="请输入课程号"></el-input>
    <h4>查询结果</h4>
    <el-table
      :data="classData"
      style="width: 100%">
      <el-table-column
        prop="cName"
        label="课堂名称"
        width="100">
      </el-table-column>
      <el-table-column
        prop="tName"
        label="教师姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="msgJoinAble"
        label="是否可加入">
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="queryCourse()" class="joinClassResult">查 询</el-button>
    <el-button type="primary" @click="joinClass()" class="joinClass" :disabled="disabled">加 入</el-button>
  </el-dialog>
</template>
  <script>
    export default {
        data() {
          return {
            classId: '',
            dialogVisible:false,
            check:false,
            classData:[],
            disabled:false
          }
        },
      computed: {
        userId: {
          get() {return this.$store.state.user.id}
        }
      },
      methods:{
          // 初始化
          init(){
            this.dialogVisible=true
          },
        //查询课堂
        queryCourse(){
            console.log(this.userId)
           this.$http({
             url:this.$http.adornUrl('/student/queryCourse.do'),
             method: 'post',
             data: this.$http.adornData({
               'cId': this.classId,
               'sId':this.userId
             })
           }).then(({data}) => {
             if (data && data.status === 200){
                this.classData = data.course
                if(data.course[0].joinAble===false)
                {
                  this.disabled=true
                }else{
                  this.disabled=false
                }

             }else{
               this.$message({
                 message:data.msg,
                 type:'error'
               })
             }
           })
        },
        //加入课堂
        joinClass(){
          if(this.classData === undefined || this.classData.length == 0){
            this.$message({
              message:'尚未查询到班级！',
              type:'warning'
            })
          }
          else{
            this.$http({
              url:this.$http.adornUrl('/student/joinCourse.do'),
              method: 'post',
              data: this.$http.adornData({
                'ctId': this.classId,
                'sId':this.userId
              })
            }).then(({data}) => {
              if (data && data.status === 200){
                this.$message({
                  message:'加入成功',
                  type:'success'
                })
                this.dialogVisible = false
                this.classId = ''
                this.classData=[]
                this.$emit('update')
              }
              else{
                this.$message({
                  message:data.msg,
                  type:'error'
                })
              }
            })
          }

        }
      }

    }
  </script>

<style>
.joinClassResult{
  margin: 10px 0;
}
  h4{
    border-bottom: 1px solid #67C23A;
  }
</style>
