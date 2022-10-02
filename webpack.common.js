const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.ico',
      title: 'React App',
      template: './src/index.html',
      minify: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
    // new webpack.HotModuleReplacementPlugin(), // Hot Module Replacement
  ],
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js', // Dynamic Imports
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    moduleIds: 'deterministic',
    usedExports: true, // Tree Shaking
    runtimeChunk: 'single', // Extracting Boilerplate
    splitChunks: {
      // Code Splitting
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.s?css$/,
        // use: ['style-loader', 'css-loader', 'sass-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
};
