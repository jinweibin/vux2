{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import {AjaxPlugin, AlertPlugin, ConfirmPlugin, ToastPlugin, DatetimePlugin} from 'vux'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import FastClick from 'fastclick'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

FastClick.attach(document.body){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// set the vux's AjaxPlugin baseUrl to yours
AjaxPlugin.$http.defaults.baseURL = '/api'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(AjaxPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(AlertPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ConfirmPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ToastPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(DatetimePlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

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
  Vue.$vux.alert.show({
    title: '提示',
    content: msg
  })
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}).$mount('#app-box'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
