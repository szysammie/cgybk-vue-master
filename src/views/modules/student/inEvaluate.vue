<template>
  <div>
    <el-card class="box-card">
      <div class="text item">
        <p>讲课速度</p>
        <el-rate v-model="value" show-text></el-rate>
      </div>
    </el-card>
    <el-card class="box-card">
      <div class="text item">
        <p>课程难度</p>
        <el-rate v-model="value" show-text></el-rate>
      </div>

    </el-card>
  </div>
</template>

<script>
    export default {
      data(){
        return{

        }
      },
      methods:{
        uploadEvaluate(){
          this.$http({
            url:'/student/remarkOn.do',
            method:'post',
            data: this.$http.adornData({
              'cId': localStorage.getItem('cId'),
              'pwId':localStorage.getItem('nowAcId')
            })
          })
        }
      }
    }
</script>

<style scoped>
  .box-card{
    margin-top: 20px;
  }
</style>
