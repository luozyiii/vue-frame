// vue.config.js
module.exports = {
  lintOnSave: undefined,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.108.120.53/hsxdtest',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
    // proxy: 'http://39.108.120.53/hsxdtest' // 或者
  }
}
