var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map', //Not for production
    entry: [
      'webpack-hot-middleware/client',
      './public/client.js'
    ],
    output: {
      path: require("path").resolve("./dist"),
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins:[
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true })
    ],
    module: {
      loaders: [
        {
          test: /\.js$/, //regex
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets:[
              'react',
              'es2015',
              'react-hmre'
            ],
            plugins:[
              "transform-decorators-legacy","transform-class-properties"
            ]
          }
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        }
      ]
    }
}