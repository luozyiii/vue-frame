import axios from 'axios'
import VueAxios from 'vue-axios'
import { api } from '@/api'

export default {
  install (Vue) {
    Vue.use(VueAxios, axios)

    Vue.prototype.api = api
  }
}
