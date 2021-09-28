module.exports = {
  devServer: {
    proxy: {
      '/oa': {
        target: 'https://oa.413club.cn',
        changeOrigin: true,
        ws:true,
        pathRewrite: {
          '^/oa':''
        }
      }
    }
  }
}