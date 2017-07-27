const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: { importLoaders: 1 }},
        ]
      },
      {
        test: /\.html$/,
        use: [
          {loader: 'html-loader'}
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'},
          {loader: 'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant: {quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'}
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'src/'),
    publicPath: path.resolve(__dirname, '/dist/'),
    hot: true,
  },
};
