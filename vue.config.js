// vue.config.js
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://oa.413club.cn',
        target: 'https://oa-dev.413club.cn',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
}


