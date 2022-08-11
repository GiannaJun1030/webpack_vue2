module.exports = {
  presets: ['@vue/babel-preset-jsx'],
  env: {
    default: {
      presets: [
        [
          '@babel/preset-env',
          {
            useBuiltIns: 'usage',
            corejs: { version: 3, proposals: true },
          },
        ],
      ],
    },
    system: {
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            absoluteRuntime: false,
            corejs: false,
            helpers: true,
            regenerator: true,
            version: '^7.18.5',
          },
        ],
      ],
    },
  },
};
