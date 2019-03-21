import axios from 'axios'
import qs from 'qs'
import {
  RES_CODE_SUC
} from '@/config'
const instance = axios.create()

function showErrorMsg (message = '网络开小差啦~~') {
  setTimeout(() => {
    console.log(message)
  }, 32)
}

instance.defaults.timeout = 10000
// instance.defaults.withCredentials = true
// instance.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
// instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// instance.defaults.headers.common['Authorization'] = 'token'

// http request 拦截器
instance.interceptors.request.use(
  config => {
    // post传参序列化
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
instance.interceptors.response.use(
  response => {
    const res = response.data

    if (res.status !== RES_CODE_SUC) {
      showErrorMsg(res.msg)
      throw response
    }
    return response
  },
  error => {
    const errorCode = error.response ? error.response.status : ''
    if (process.env.NODE_ENV !== 'production') console.warn(`请求异常 错误码: ${errorCode} \n 错误信息: ${error} \n 详细信息: `, error.response)
    showErrorMsg()
    throw (error.response || {})
  }
)

export default instance
