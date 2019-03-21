<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="home">Home2</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.home {
  font-size: 24px;
}
</style>
