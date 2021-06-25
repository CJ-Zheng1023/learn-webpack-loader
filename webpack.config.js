const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
module.exports = {
  entry: resolve(__dirname, 'src/app.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tpl$/,
        use: [
          'babel-loader',
          {
            loader: 'tpl-loader',
            options: {
              log: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8888
  },
  resolveLoader: {
    modules: ['./node_modules', './loaders']
  }
}
