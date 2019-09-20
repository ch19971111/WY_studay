const path = require('path')

module.exports = {
    configureWebpack: {
        resolve:{
            alias:{
                assets: path.resolve(__dirname, './src/assets'),
                utils:  path.resolve(__dirname, './src/Utils'),
                styles: path.resolve(__dirname,'./src/assets/styles')
            }
        }
    },
    devServer:{
        proxy: {
            '/api': {
              target: 'http://localhost:3000/api',
              changeOrigin: true,
              pathRewrite:{
                  '^/api':''
              }
            },
            '/get':{
                target: 'http://localhost:3000/get',
                changeOrigin: true,
                pathRewrite:{
                    '^/get':''
                }
            },
            '/post':{
                target:'http://localhost:3000/post',
                changeOrigin: true,
                pathRewrite:{
                    '^/post':''
                }
            }
        }
    }
}