const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "app-bundle.js" // <--- Will be compiled to this single file
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};