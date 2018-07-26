<template>
  <div id="app">
    <router-view></router-view>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import {Loading} from 'vux'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import {mapState} from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.app.isLoading
    })
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import "./assets/theme/theme.less";
@import "./assets/css/base.css";

body {
  background-color: #fbf9fe;
}
</style>
