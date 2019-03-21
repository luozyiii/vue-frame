import Vue from 'vue'

const api = {
  getNearbyStores: params => Vue.axios.post('/api/online/h5/nearbyStores', params)
}

export {
  api
}
