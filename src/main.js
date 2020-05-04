import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueAnimate from 'vue-animate-scroll'

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueAnimate,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
