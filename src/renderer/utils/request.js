import axios from 'axios'
import {
  Message
  // MessageBox
} from 'element-ui'
import store from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // 以http打头，直接返回
  if(config.url.startsWith('http')){
    return config
  }
  // 添加代理
  if (process.env.NODE_ENV !== 'production') {
    config.url = '/version_1' + config.url
  }
  if (store.getters.token) {
    config.headers['Authorization'] = 'Token ' + store.getters.token // 让每个请求携带自定义token
  }
  // alert(JSON.stringify(config))
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    try {
      const data = response.data
      if(data.status === 'ok') return data.results
      else throw new Error(data.msg)
    } catch (error) {
      return _handleCatchError(error)
    }
    
    // const res = response.data
    // return res
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('FedLogOut').then(() => {
    //         location.reload()// 为了重新实例化vue-router对象 避免bug
    //       })
    //     })
    //   }
    //   return Promise.reject('error')
    // } else {
    //   return response.data
    // }
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return _handleCatchError(error)
  }
)

/**
 * 处理请求异常
 * @param {Error} error 异常信息
 */
const _handleCatchError = (error) => {
  if (error.message === 'Network request failed') {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
  } else if (error.message === 'timeout') {
    // 超时
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
  }
  return Promise.reject(error)
  // throw error
}

export default service
