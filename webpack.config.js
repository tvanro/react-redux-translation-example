const path = require('path');

module.exports = {
  entry: ["./src/index.html", "mini.css/dist/mini-nord.css", "./src/js/index.jsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "assets/js/bundle.js",
    publicPath: "/"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?-url']
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, "src"),
        use: 'file-loader?name=[name].[ext]'
      }
    ]
  },

  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    alias: {
      components: 'js/components',
      constants: 'js/constants',
      pages: 'js/pages',
    },
    extensions: [".js", ".jsx"],
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 8080
  }

}
