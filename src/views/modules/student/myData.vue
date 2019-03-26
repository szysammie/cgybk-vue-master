<template>
  <div>
    <el-alert
      title="温馨提示："
      type="warning"
      :closable="false">
      <div slot-scope="description">
        <p class="el-alert__description">提供平均分，作业情况，每次作业得分的数据</p>
      </div>
    </el-alert>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div id="uploadWork" class="chart-box"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div id="averScore" class="chart-box"></div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card>
          <div id="workScore" class="chart-box"></div>
        </el-card>
      </el-col>
    </el-row>



  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data() {
      return {
        uploadWork:null,
        averScore:null,
        workScore:null,
      }
    },
    activated () {
      // 由于给echart添加了resize事件, 在组件激活时需要重新resize绘画一次, 否则出现空白bug
      if (this.uploadWork) {
        this.uploadWork.resize()
      }
      if (this.averScore) {
        this.averScore.resize()
      }
      if (this.workScore) {
        this.workScore.resize()
      }

    },
    methods:{

    }
  }
</script>

<style lang="scss">
  .mod-demo-echarts {
    > .el-alert {
      margin-bottom: 10px;
    }
    > .el-row {
      margin-top: -10px;
      margin-bottom: -10px;
      .el-col {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
    .chart-box {
      max-width: 500px;
      min-height: 400px;
    }
  }
  .selectDate{
    margin-top: 20px;
  }
</style>
