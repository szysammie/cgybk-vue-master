import Mock from 'mockjs'

//   教师查询课堂
export  function getTeacherClass() {
  return {
    url:'/teacher/selectClass.do',
    type:'get',
    data:{
      'courseList' :
        [
          {
            'cId':11112,
            'cName':'高等数学',
            'scName':'计算机学院',
            'tName':'文成',
            'cImgSrc':`/static/img/avatar.03cb40b.png`,
            'tImgSrc':`/static/img/avatar.03cb40b.png`,
          }
        ],
      'status':200
    }
  }
}
//教师查询学生
export  function getTeacherStudent() {
  return {
    url:'/teacher/SearchStudents.do',
    type:'post',
    data:{
      'students':
        [
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034111',
            'rank':1,
            'sumScore':200
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034106',
            'rank':2,
            'sumScore':190
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034108',
            'rank':3,
            'sumScore':180
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034111',
            'rank':4
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034106',
            'rank':5
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'王五',
            'sId':'1706034108'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'张三',
            'sId':'1706034111'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'王五',
            'sId':'1706034108'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'张三',
            'sId':'1706034111'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'李四',
            'sId':'1706034106'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'王五',
            'sId':'1706034108'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034111'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034106'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034108'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034111'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034106'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'王五',
            'sId':'1706034108'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'张三',
            'sId':'1706034111'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'王五',
            'sId':'1706034108'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'张三',
            'sId':'1706034111'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'李四',
            'sId':'1706034106'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'王五',
            'sId':'1706034108'
          },
          {
          'sImgSrc':'/static/img/avatar.03cb40b.png',
          'sName':'刘洋',
          'sId':'1706034111'
        },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034106'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034108'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034111'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'刘洋',
            'sId':'1706034106'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'王五',
            'sId':'1706034108'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'张三',
            'sId':'1706034111'
          },
          {
            'sImgSrc':'/static/img/avatar.03cb40b.png',
            'sName':'王五',
            'sId':'1706034108'
          },



        ],
      'max':5,
      'status':200
    }
  }
}
//教师查询活动
export  function getTeacherActivity() {
  return {
    url:'/teacher/queryPublishWork.dotime',
    type:'post',
    data:
        {
          "countall": 4,  //所有活动个数
          "max": 1,    //最大页数
          "countprocess": 3,  //进行中的数量
          "countover": 1,  //已经结束的作业数量
          "publishWorks": [
          {
            "pwId": "0",   //作业发布码
            "pwEnd": "3020-12-31",
            "activityImgSrc": "/static/img/avatar.03cb40b.png",
            "pwName": "练习一练习一练习一练习一练习一",
            "pwStringState": "进行中",   //作业进行状态
            "pwBooleanState": true,
            "pwScore": 100,  //发布作业总分值
            "finishedNum": 1   //已经参与的学生数量
          },
            {
              "pwId": "0",   //作业发布码
              "pwEnd": "3020-12-31",
              "activityImgSrc": "/static/img/avatar.03cb40b.png",
              "pwName": "练习二",
              "pwStringState": "已结束",   //作业进行状态
              "pwBooleanState": false,
              "pwScore": 100,  //发布作业总分值
              "finishedNum": 1   //已经参与的学生数量
            },
            {
              "pwId": "0",   //作业发布码
              "pwEnd": "3020-12-31",
              "activityImgSrc": "/static/img/avatar.03cb40b.png",
              "pwName": "练习一",
              "pwStringState": "进行中",   //作业进行状态
              "pwBooleanState": true,
              "pwScore": 100,  //发布作业总分值
              "finishedNum": 1   //已经参与的学生数量
            },
            {
              "pwId": "0",   //作业发布码
              "pwEnd": "3020-12-31",
              "activityImgSrc": "/static/img/avatar.03cb40b.png",
              "pwName": "练习一",
              "pwStringState": "进行中",   //作业进行状态
              "pwBooleanState": true,
              "pwScore": 100,  //发布作业总分值
              "finishedNum": 1   //已经参与的学生数量
            },

        ],
          "status": 200
    }
  }
}
//   教师根据名称查询活动
export  function getTeacherAcByName() {
  return {
    url:'/teacher/fuzzySearchWorkNames.do',
    type:'post',
    data:{
      "fuzzySearchWorks": [
        {
          "value": "练习一"
        },
        {
          "value": "练习二"
        },
        {
          "value": "练习三"
        },
        {
          "value": "练习四"
        }
      ],
      "status": 200
    }
  }
}
//   教师手动选取活动
export  function getTeacherHandleAcByName() {
  return {
    url:'/teacher/SearchPwByPwName.dotime',
    type:'post',
    data:{
      "fuzzySearchWorks": [
        {
          "finishedNum": 1,
          "pwName": "练习一",
          "pwEnd": "3020-12-31",
          "pwId": "0",
          "pwState": true,
          "pwStringState": "进行中",
          "activityImgSrc": "/static/img/avatar.03cb40b.png",
          "pwBooleanState": true,
          "cId": 1
        }
      ],
      "status": 200
    }
  }
}
//教师查询活动数据
export  function teacherEditAcInfo() {
  return {
    url:'/teacher/getPwDetails.do',
    type:'post',
    data:{
      "teacherFilesImages": [
        {
          "name": "大数据.jpg",
          "state": true,
          "tfId": 1,
          "type": "jpg",
          "url": "/static/img/avatar.03cb40b.png"
        }
      ],
      "teacherFiles": [
        {
          "name": "新建文本文档.txt",
          "state": true,
          "tfId": 4,
          "type": "txt",
          "url": "http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls"
        },
        {
          "name": "2018蓝桥杯笔记.doc",
          "state": true,
          "tfId": 5,
          "type": "doc",
          "url": "\\workfile\\1\\student\\1\\2018蓝桥杯笔记.doc"
        }
      ],
      "publishWork": [
        {
          "pwScore": 100,
          "pwName": "练习二",
          "pwEnd": "2019-12-31",
          "activityImgSrc": "\\imgSrc\\workimgdefault.png",
          "pwContent": "什么是数据分析 有什么作用?",
          'pwState':true
        }
      ],
      "status": 200
    }
  }
}
//教师提交修改活动
export  function teacherupdateAcInfo() {
  return {
    url:'/teacher/updatepublishWork.do',
    type:'post',
    data:{
      "status": 200
    }
  }
}
