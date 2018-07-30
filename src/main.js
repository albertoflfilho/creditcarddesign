import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueSweetAlert2 from 'vue-sweetalert2'
import VeeValidate from 'vee-validate'

Vue.use(VueAwesomeSwiper)
Vue.use(VueSweetAlert2)
Vue.use(VeeValidate, {
  events: 'change|blur|keypress'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
