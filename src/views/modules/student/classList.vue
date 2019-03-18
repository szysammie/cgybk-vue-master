<template>
  <div>
    <el-button type="success" icon="el-icon-plus" @click="joinClass()"circle></el-button>
    <ul v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-background="rgba(255, 255, 255, 0.8)"
    >
      <li v-for="p in classList" :key="p.cId" @click="inClass(p.cId)">
        <img :src="p.cImgSrc" alt="">
        <p class="course-item">课堂号：{{p.cId}}</p>
        <p class="course-item">课堂名称：{{p.cName}}</p>
        <p class="course-item">开设学院：{{p.scName}}</p>
        <p class="course-item">教师：<img :src="p.tImgSrc" :alt="p.tName" class="tIcon">{{p.tName}}</p>
      </li>
    </ul>
    <!--弹窗，新增课堂-->
    <joinClass  ref="joinClassButton" @update="update" ></joinClass>
    <!--课堂-->
  </div>
</template>

<script>
  import joinClass from './joinClass'
  import Class from  './class'
    export default {
      data() {
        return {
          classList: [],
          loading: true,
          classId:'',
        }
      },
      computed: {
        userId: {
          get() {return this.$store.state.user.id}
          }
        },
        components: {
          'joinClass':joinClass,
          'Class':Class
        },
        mounted() {
          this.getClass()
        },
        methods:
          {
            getClass() {
              this.$http({
                url: this.$http.adornUrl('/student/queryJoinedCourses.do'),
                method: 'get',
              }).then(({data}) => {
                if (data && data.status === 200) {
                  // cId cName tName scName cPath
                  this.classList = data.joinedCourses
                  this.loading = false
                }else{
                  this.$message({
                    message:data.msg,
                    type:'success'
                  })
                }
              })
            },
            joinClass() {
              this.$nextTick(() => {
                this.$refs.joinClassButton.init()
              })
            },
            inClass(cId){
              localStorage.setItem('cId',cId)
              this.$router.push({name:'class'})
            },
            update(){
              this.getClass()
            }
          }
    }
</script>

<style scoped>
 li{
   cursor: pointer;
   width: 200px;
   height: 305px;
   background: #409EFF;
   border-radius: 7px;
   overflow: hidden;
   display: inline-block;
   margin-right: 10px;
 }
  img{
    width: 200px;
    height: 200px;
    padding: 0;
    margin: 0 auto;
  }
  ul{
    list-style: none;
    padding: 0;
  }
  .course-item{
    line-height: 7px;
    padding-left: 10px;
    color: #fff;
  }
  .tIcon{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 5px;
  }
</style>
