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
