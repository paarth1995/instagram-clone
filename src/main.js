import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueDragscroll from "vue-dragscroll";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(VueDragscroll);
export const eventBus = new Vue();


new Vue({
  router,
  store,
  Buefy,
  render: h => h(App)
}).$mount('#app')

