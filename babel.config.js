module.exports = {
  presets: [
    '@vue/babel-preset-jsx',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: { version: '3.2', proposals: true },
      },
    ],
  ],
};
