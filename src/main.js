import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueParticles from 'vue-particles'
import VueI18n from 'vue-i18n'

import "./Css/base.css"
import "./Css/reset.css"
// import "./view.js"
Vue.use(VueI18n)
Vue.use(VueParticles)
Vue.config.productionTip =true
Vue.config.debug = true

const i18n = new VueI18n({
  locale:'zh-CN',//语言标识
  messages:{
    'zh-CN':require('./lang/zh'),
    'en-US':require('./lang/en')
  }
})
new Vue({
    el: '#app',
    i18n,
    router,
    render: h => h(App)
  })