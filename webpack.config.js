const HtmlWebpackPlugin = require('html-webpack-plugin')
const MdToHtmlPlugin = require('./plugins/mdToHtmlPlugin')
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
    }),
    new MdToHtmlPlugin({
      template: resolve(__dirname, 'src/test.md'),
      filename: 'test.html'
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
