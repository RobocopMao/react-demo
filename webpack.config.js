var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader')
    },{
      test: /\.scss$/,
      loader: "style!css!sass"
    },{
      test: /\.less$/,
      loader: "style!css!less"
    }]
  },
  //devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
   ]
};

module.exports = config;
