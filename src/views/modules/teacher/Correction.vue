<template>
    <div>
      <el-autocomplete
        v-model="suggestion"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入学号或姓名查询"
        @select="handleSelect"
      ></el-autocomplete>
      <h3>活动附件</h3>
      <el-table
        :data="teacherFileList"
        style="width: 100%">
        <el-table-column
          label="文件名"
          width="500">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handView(scope.row.url)">在线预览</el-button>
            <a :href="scope.row.url" download="download"> <el-button
              size="mini"
              type="warning"
            >下载</el-button></a>
          </template>
        </el-table-column>
      </el-table>

      <el-table
        :data="teacherImgFileList"
        style="width: 100%">
        <el-table-column
          label="图片"
          width="500">
          <template slot-scope="scope">
            <viewer>
              <img :src="scope.row.url" alt="" class="uploadImg">
            </viewer>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <a :href="scope.row.url" download="download"> <el-button
              size="mini"
              type="warning"
            >下载</el-button></a>
          </template>
        </el-table-column>
      </el-table>

      <h3>学生作业情况</h3>
      <div class="allCheck">
        <el-radio v-model="checkState" label="1" @change="getStudentByState('1')">待批改({{countFinishsAndNotCheckStudent}})</el-radio>
        <el-radio v-model="checkState" label="2" @change="getStudentByState('2')">未提交({{countNotFinishStudents}})</el-radio>
        <el-radio v-model="checkState" label="3" @change="getStudentByState('3')">已批改({{countFinishStudents}})</el-radio>
      </div>
      <ul>
        <li v-for="(p,sId) in students" :key="sId">

        </li>
      </ul>
      <el-pagination
        layout="prev, pager, next"
        :current-page="nowPage"
        class="pagination"
        :page-count="max">
      </el-pagination>
      <viewOnline ref="viewOnline"></viewOnline>
    </div>
</template>

<script>
  import viewOnline from  '../user/viewOnline'
    export default {
        data(){
          return {
            suggestion:'',
            checkState:'1',
            countNotFinishStudents: 2,
            countFinishsAndNotCheckStudent: 2,
            countFinishStudents: 1,
            students:[],
            teacherImgFileList:[],
            teacherFileList:[],
            nowPage:1,
            max:1,
            publishWork:[]
          }
        },
      components:{
        viewOnline
      },
      mounted(){
        this.getAcInfoByState()
      },
      methods:{
        getAcInfoByState(){
          this.$http({
            url: this.$http.adornUrl('/teacher/getWorkDetails.do'),
            method: 'post',
            data: this.$http.adornData({
              'pwId': localStorage.getItem('nowAcId'),
              'state': this.checkState,
              'page':this.nowPage
            })
          }).then(({data}) => {
            if (data && data.status === 200) {
               this.publishWork = data.publishWork
               this.teacherImgFileList = data.teacherFilesImages
               this.teacherFileList = data.teacherFiles
               this.students = data.students
            }
          })
        },
        handView(url){
          this.$nextTick(() => {
            this.$refs.viewOnline.init(url)
          })
        },
      }
    }
</script>

<style scoped>
  .allCheck{
    margin: 30px;
  }
  .pagination{
    width: 200px;
    margin: 0 auto;
  }
  .uploadImg{
    width: 50px;
    height: 50px;
  }
  li{
    width: 20%;
    height: 90px;
    list-style: none;
    border: 1px solid #e1e1e1;
    margin-right: 15px;
    display: inline-block;
  }
</style>
