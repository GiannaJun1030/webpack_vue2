const { resolve } = require('path');
const __root = resolve(__dirname, '../');

const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const commonConfig = require('./webpack.config.common');

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
  mode: 'development',
  module: {
    rules: [...cssRules],
  },
  optimization: {
    usedExports: true,
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
      maxInitialRequests: 2,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 1,
          minSize: 0,
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          mangle: {
            safari10: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash:6].css',
      chunkFilename: 'css/[id]-[contenthash:6].css',
      ignoreOrder: false,
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
};

module.exports = merge(commonConfig, config);
