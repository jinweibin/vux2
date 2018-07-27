{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import filters from './commons/filters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import {AlertPlugin, ConfirmPlugin, ToastPlugin, DatetimePlugin} from 'vux'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import FastClick from 'fastclick'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import API from './http/index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// API全局绑定
Vue.use(API)
// 去除手机端的快速点击
FastClick.attach(document.body){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// VUX 全局插件
Vue.use(AlertPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ConfirmPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ToastPlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(DatetimePlugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// 共同过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
})

/* eslint-disable no-new */
new Vue({
  router,
  {{#vuex}}
  store,
  {{/vuex}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}).$mount('#app-box'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
