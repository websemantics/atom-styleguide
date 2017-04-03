var path = require('path');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/')
  },
  resolve: {
    modules: [path.resolve(__dirname), 'node_modules'],
    extensions: ['.js']
  },
  module: {
    rules: [
      { test: /\.ts$/, use: ['ts-loader', 'tslint-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.less$/, use: ['style-loader', {
          loader: 'css-loader',
          options: {
            alias: {
              '../static/variables': '../static',
              '../node_modules/atom-ui/styles/images': '../static/images'
            }
          }
        },
          {
            loader: "less-loader",
            options: {
              paths: [
                path.resolve(__dirname, 'node_modules/atom-ui/styles'),
                path.resolve(__dirname, 'node_modules/one-dark-syntax/styles'),
                path.resolve(__dirname, 'node_modules/one-dark-ui/styles'),
                path.resolve(__dirname, 'static/variables')
              ]
            }
          }]
      },
      { test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|html)$/, loader: 'file-loader?name=[name].[ext]' }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
    open: true
  }
};