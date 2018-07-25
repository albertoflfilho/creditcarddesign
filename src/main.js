import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
