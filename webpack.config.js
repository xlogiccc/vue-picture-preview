const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // webpack 4版本之后加的，之前的版本不需要这个
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 引入CleanWebpackPlugin插件

let config = {
  entry: path.resolve(__dirname, './src/index.js'), // 以join拼接path的形式配置绝对路径,相对路径打包后找不到会报错
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'vue-picture-preview.js',
    library: 'vue-picture-preview',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    }
  },
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve('src'), path.resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve('src'), path.resolve('test')]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000, // 判断图片的大小   如果小于10000就会转换成base64
            name: '[name].[ext]' // 输出图片的名字  ext是扩展名
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin(`Vue-Picture-Preview v2.0.0\n(c) 2018-${new Date().getFullYear()} xLogic\nReleased under the MIT License.`), // new一个插件的实例
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin()
  ]
};

module.exports = config;
