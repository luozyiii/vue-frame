<template>
  <div>axios 网络请求 get or post</div>
</template>

<script>
export default {
  name: 'axios',
  created () {
    this.getNearbyStores()
    this.getNearbyGoodsVoucher()
  },
  methods: {
    getNearbyStores () {
      this.pagesStatus = false
      return this.api.getNearbyStores2({
        city: '广州市',
        pageSize: 10,
        currentPage: 1
      }).then(({ data: { data } }) => {

      }).catch(e => {

      })
    },
    async getNearbyGoodsVoucher () {
      try {
        const { data: { data } } = await this.api.getNearbyGoodsVoucher({
          longitude: '',
          latitude: '',
          city: '',
          currentPage: 1,
          pageSize: 10
        })
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
