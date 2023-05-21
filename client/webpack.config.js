const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  output: {
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          `babel-loader`
        ]
      },
      {
        test: /\.s?css/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
  ],

  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    open: true,
  }
}