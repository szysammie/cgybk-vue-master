<template>
  <el-dialog
    title="创建课堂"
    width="30%"
    :visible.sync="dialogVisible"
  >
    <span>课堂名称</span>
    <el-input v-model="className" placeholder="请输入课堂名称"></el-input>
    <span>是否开启选课</span>
    <el-switch
      v-model="isChooiceCourse"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
    <el-button type="primary" @click="creatClass()" class="creatClassButton" :disabled="disabled">创 建</el-button>
  </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        className: '',
        dialogVisible:false,
        disabled:false,
        isChooiceCourse:true
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
      // 创建课堂
      creatClass(){
        if(this.className===''||this.className===null){
          this.$message({
            message:'请先输入课堂名称！',
            type:'error'
          })
        }
        else{
          this.$http({
            url:this.$http.adornUrl('/teacher/createClass.do'),
            method: 'post',
            data: this.$http.adornData({
              'ctName': this.className,
              'ctSwitch':this.isChooiceCourse
            })
          }).then(({data}) => {
            if (data && data.status === 200){
              this.$message({
                message:'创建成功',
                type:'success'
              })
              this.dialogVisible = false
              this.className = '',
              this.isChooiceCourse=true
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

<style scoped>
  h4{
    border-bottom: 1px solid #67C23A;
  }
  .creatClassButton{
    display: block;
  }

</style>
