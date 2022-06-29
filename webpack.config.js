module.exports = {
  mode: "production", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "sass-loader",
            options: {
                minimize: true
            }
        }]
    }]
}
};