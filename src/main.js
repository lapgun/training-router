import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { layoutMixins } from './mixins'

Vue.config.productionTip = false
Vue.mixin(layoutMixins)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
