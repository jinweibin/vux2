import Vue from 'vue'
import store from '../store'
import {AjaxPlugin} from 'vux'

// set the vux's AjaxPlugin baseUrl to yours
AjaxPlugin.$http.defaults.baseURL = '/api'

// 添加一个请求拦截器
AjaxPlugin.$http.interceptors.request.use(function (config) {
  // 在请求发送之前做一些事
  if (store.getters.token) {
    // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    config.headers['x-lt-token'] = store.getters.token
  }
  // 在请求发送之前做一些事
  store.commit('SWITCH_IS_LOADING', true)
  return config
})

// 添加一个全局AjaxPlugin返回拦截器
AjaxPlugin.$http.interceptors.response.use(function (res) {
  // 对返回的数据进行一些处理
  store.commit('SWITCH_IS_LOADING', false)
  console.log(res.data)
  return res.data.data
}, function (error) {
  store.commit('SWITCH_IS_LOADING', false)
  console.error(error.response.data.msg)
  let msg = error.response.data.msg
  // 需要处理的 code
  if (error && error.response) {
    switch (error.response.status) {
      case 404:
        msg = `请求地址出错: ${error.response.config.url}`
        break
    }
  }
  Vue.$vux.alert.show({
    title: '提示',
    content: msg
  })
  return Promise.reject(error)
})

// ===============================================================

/* 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * get方法的第二个参数是 get 的 config, 所以要传参需要设置到 params 下,
 */
export const testGetAPI = id => {
  return AjaxPlugin.$http.get('/url', {
    params: {
      id: id
    }
  })
}
export const testPostAPI = data => {
  return AjaxPlugin.$http.post('/url', data)
}

// 默认全部倒出
export default {
  testGetAPI,
  testPostAPI,
}
