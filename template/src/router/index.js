import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import HelloWorld from '@/components/HelloFromVux'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from '../store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
/**
 * 路由
 * @type {VueRouter}
 */
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}},{{/if_eq}}

/**
 * 路由钩子设定
 * @type {string[]}
 */
// 不重定向白名单
const whites = ['/']{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// 切换页面时,显示正在加载
router.beforeEach(function (to, from, next) {
  store.commit('SWITCH_IS_LOADING', true){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  if (to.path.indexOf(whites) !== -1) {
    next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  } else {
    // 拦截操作
    next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// 切换页面成功后,隐藏正在加载
router.afterEach(function (to) {
  store.commit('SWITCH_IS_LOADING', false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default router
