import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuePlugins from './utils/plugins'

Vue.config.productionTip = false

Vue.use(vuePlugins)

let debugMode = (process.env.APP_SWITCH_DEBUGTOOL === 'on')

if (debugMode) {
  const VConsole = require('vconsole')
  /* eslint-disable no-new */
  new VConsole()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
