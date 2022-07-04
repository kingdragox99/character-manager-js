const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  mode: 'development',
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: {
    home: './src/index.js',
    edit: './src/modifcharacters.js',
    add: './src/characters',
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      filename: 'modif.html',
      template: './modif.html',
      chunks: ['edit'],
    }),
    new HtmlWebpackPlugin({
      filename: 'pageAjt.html',
      template: './pageAjt.html',
      chunks: ['add'],
    }),
  ],
};