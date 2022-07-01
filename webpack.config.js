module.exports = {
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: {
    home: './src/index.js',
    maker: './src/characters.js',
    modif: './src/modifcharacters.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].bundle.js"
  },
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }]
  }
};