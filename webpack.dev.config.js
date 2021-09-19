const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    admin: './src/admin.js',
    table: './src/table.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'development',
  devServer: {
    open: true,
    port: 8080,
    hot: true,
    devMiddleware: {
      writeToDisk: true,
    },
    static: {
      directory: __dirname,
      watch: true,
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: [
              ["@babel/transform-runtime"]
            ]
          }
        },
        exclude: /node_modules/,
      }
    ]
  }
};