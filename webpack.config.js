const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: ['./build/irregularVerbs.js'],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
    publicPath: '/verbs/'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: "babel-loader",
        include: path.join(__dirname, 'build')
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
}