// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routers'
import store from './store'
import rem from './assets/js/rem';

/**
 * 使用rem
 */
rem(document,window);

Vue.config.productionTip = false;


/**
 * 引入loading全局组件
 */
 
import Loading from '@/components/common/Loading.vue';

Vue.component('Loading',Loading);


//图片全局处理过滤器

Vue.filter('setWh',(url,arg)=>{
  return url&&url.replace(/w\.h/,arg)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
