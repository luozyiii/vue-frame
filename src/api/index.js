import Vue from 'vue'
import Axios from './axios'

const api = {
  getNearbyStores: params => Vue.axios.post('/api/online/h5/nearbyStores', params),
  getNearbyStores2: params => Axios.post('/api/online/h5/nearbyStores', params),
  getNearbyGoodsVoucher: params => Axios.get('/api/online/h5/nearbyGoodsVoucher', { params })
}

export {
  api
}
