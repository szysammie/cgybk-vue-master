<template>
  <div>
    <span class="comment-title">课程名:{{commentInfo.course}}</span>
    <span class="comment-title">教师:{{commentInfo.teacherName}}</span>
    <span class="comment-title">截至时间:{{commentInfo.overTime}}</span>
    <h4>讲课速度</h4>
    <el-rate v-model="eSpeed" show-text :texts="speedContent"></el-rate>
    <h4>难度</h4>
    <el-rate v-model="eDiffcult" show-text></el-rate>
    <h4 class="feel">感受</h4>
    <el-alert
      title="提示："
      type="success"
      :closable="false">
      <div slot-scope="description">
        <p class="el-alert__description">评价字数不可大于三百</p>
      </div>
    </el-alert>
    <script :id="ueId1" class="ueditor-box" type="text/plain" style="width: 100%; height: 260px;">感受</script>
    <h4 class="feel">其他建议</h4>
      <el-alert
    title="提示："
    type="success"
    :closable="false">
      <div slot-scope="description">
      <p class="el-alert__description">评价字数不可大于三百</p>
      </div>
      </el-alert>
    <script :id="ueId2" class="ueditor-box" type="text/plain" style="width: 100%; height: 260px;">其他建议</script>
    <el-button type="success" class="upbtn" @click="uploadComment">提交</el-button>
  </div>
</template>

<script>
  import ueditor from 'ueditor'
    export default {
      data () {
        return {
          eSpeed:null,
          eDiffcult:null,
          speedContent:['很慢','慢','快','太快','刚刚好'],
          commentInfo:{
            course:'高等数学',
            teacherName:'石川',
            overTime:'2018/12/13'
          },
          eFell: null,
          eOtherAdvance:null,
          ueId1: `1`,
          ueId2:`2`,
          eFellContent: '',
          eOtherAdvance:'',
          dialogVisible: false
        }
      },
      mounted () {
        this.ue = ueditor.getEditor(this.ueId1, {
          // serverUrl: '', // 服务器统一请求接口路径
          zIndex: 10
        }),
          this.ue = ueditor.getEditor(this.ueId2, {
            // serverUrl: '', // 服务器统一请求接口路径
            zIndex: 10
          })
      },
      methods: {
        getContent () {
          this.dialogVisible = true
          this.ue.ready(() => {
            this.ueContent = this.ue.getContent()
          })
        },
        uploadComment(){

        }
      }
      }
</script>

<style>
.comment-title{
  font-weight: bold;
  margin-right: 15px;
  padding: 3px;
}
.feel{
  margin-bottom: 0;
}
  .upbtn{
    margin-top: 10px;
    float: right;
  }
</style>
