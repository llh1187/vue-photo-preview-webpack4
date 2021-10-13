var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	entry:'./src/lib/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader?minimize','resolve-url-loader'],
          fallback: 'style-loader',
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'photo-preview-skin/[name].[ext]',
          publicPath:'./'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), // vue加载器
    new ExtractTextPlugin('skin.css'),
  ],
  devServer: {
    historyApiFallback: true,
    writeToDisk: true,
  },
  devtool: 'source-map'
}
