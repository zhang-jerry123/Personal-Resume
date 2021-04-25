const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode:'production', // 开发模式
    entry: path.resolve(__dirname,'../src/main.js'),    // 入口文件
    output: {
        filename: '[name].[hash:8].js',      // 打包后的文件名称
        path: path.resolve(__dirname,'../dist')  // 打包后的目录
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html')
        }),
        new CleanWebpackPlugin(),
        new vueLoaderPlugin()
    ],
    module:{
        rules:[
          {
            test:/\.vue$/,
            use:['vue-loader']
          },
          {
            test:/\.css$/,
            use:['style-loader','css-loader'] // 从右向左解析原则
          },
          {
            test:/\.less$/,
            use:['style-loader','css-loader','less-loader'] // 从右向左解析原则
          },
          {
              test:/\.scss$/,
              use:['style-loader','css-loader','sass-loader']
          },
          {
            test: /\.(jpe?g|png|gif)$/i, //图片文件
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 10240,
                  fallback: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[hash:8].[ext]'
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      resolve:{
        alias:{
          'vue$':'vue/dist/vue.runtime.esm.js',
          ' @':path.resolve(__dirname,'../src')
        },
        extensions:['*','.js','.json','.vue']
      },

}