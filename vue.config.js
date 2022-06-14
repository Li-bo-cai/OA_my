// vue.config.js
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://oa.413club.cn',
        target: 'https://preapi.175.run',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto"
        },
      ]
    }
  }
}


