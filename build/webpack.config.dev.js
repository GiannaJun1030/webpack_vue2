const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const { resolve } = require('path');
const __root = resolve(__dirname, '../');

const commonCssLoader = ['vue-style-loader', 'css-loader', 'postcss-loader'];

require('dotenv').config({ path: resolve(__root, './env/.env') });

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
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [...cssRules],
  },
  devServer: {
    historyApiFallback: true,
    port: 'auto',
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        pathRewrite: {
          '/api': '',
        },
        bypass: function (req) {
          // 不是 ajax 请求不走代理，防止页面请求也被代理
          if (req.headers.accept?.indexOf('html') !== -1) {
            return '/index.html';
          } else if (req.headers['x-requested-with'] !== 'XMLHttpRequest') {
            return false;
          }
        },
      },
    },
    compress: true,
    open: true,
    hot: true,
  },
};

module.exports = merge(commonConfig, config);
