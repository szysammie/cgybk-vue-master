import Mock from 'mockjs'

// 登录
export function login () {
  return {
    // isOpen: false,
    url: '/role/login.do',
    type: 'post',
    data: {
      'msg': 'success',
      'status': 200,
      'expire': Mock.Random.natural(60 * 60 * 1, 60 * 60 * 12),
      'token': Mock.Random.string('abcdefghijklmnopqrstuvwxyz0123456789', 32),
      'timeOut':30
    }
  }
}

// 退出
export function logout () {
  return {
    // isOpen: false,
    url: '/role/quit.do',
    type: 'get',
    data: {
      'msg': 'success',
      'status': 200
    }
  }
}
