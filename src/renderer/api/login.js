import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/api/sd/v1/auth/login/',
    method: 'post',
    data: {
      phone: username || '13668170173',
      password: password || 'ly123456',
      type: 'phone'
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

