const { merge } = require('webpack-merge');
const { resolve } = require('path');

const __root = resolve(__dirname, '../');

const commonConfig = require('./webpack.config.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader',
];
const cssRules = [
  {
    test: /\.css$/i,
    use: [...commonCssLoader],
  },
  {
    test: /\.(sass|scss)$/i,
    use: [
      ...commonCssLoader,
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          resources: resolve(__root, './src/commons/styles/var.scss'),
        },
      },
    ],
  },
];

const config = {
  mode: 'production',
  module: {
    rules: [...cssRules],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
    }),
  ],
};

module.exports = merge(commonConfig, config);
