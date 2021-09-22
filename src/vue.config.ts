module.exports = {
    // publicPath: '/dist-kol',
    publicPath: '/',
    lintOnSave: process.env.NODE_ENV === 'development',
    devServer:{
      proxy:{
        '/oa': {
          https: false,
          target: 'https://oa.413club.cn',
          ws: true,
          port:8080,
          changOrigin: true, //允许跨域
          pathRewrite: {
            '^/oa': '' //请求的时候使用api
          }
        }
      }
    },
  };
  