// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

axios.defaults.baseURL = process.env.RSS_HOST

axios.interceptors.request.use(config => {
  if (config.url.lastIndexOf('.json') < 0) {
    config.url += '.json'
  }

  return config;
}, err => Promise.reject(err))

window.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
