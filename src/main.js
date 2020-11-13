import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// Layouts
import DefaultLayout from './layouts/Default.vue'
import { LAYOUT } from './constants/globals.js'

Vue.component(LAYOUT.default, DefaultLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
