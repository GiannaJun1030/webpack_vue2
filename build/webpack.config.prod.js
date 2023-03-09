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
      '...',
      new TerserPlugin({
        extractComments: false,
      }),
      '...',
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash:6].css',
      chunkFilename: 'css/[id]-[contenthash:6].css',
      ignoreOrder: false,
    }),
    new CompressionPlugin({
      test: /\.js$|\.html$|\.css$/, // 匹配需要压缩的文件类型
      threshold: 1024, // 大于 1KB 的文件才进行压缩
      minRatio: 0.8, // 压缩比例达到 80% 时才进行压缩
    }),
  ],
};

module.exports = merge(commonConfig, config);
