import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// Layouts
import DefaultLayout from './layouts/Default.vue'
import WorkoutLayout from './layouts/Workout.vue'
import { LAYOUT } from './constants/globals.js'

import Defaults from './utils/defaults.util.js'

console.log('Default Exercises:', Defaults.getExercises())
console.log('Default Workouts:', Defaults.getWorkouts())

Vue.component(LAYOUT.default, DefaultLayout)
Vue.component(LAYOUT.workout, WorkoutLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
