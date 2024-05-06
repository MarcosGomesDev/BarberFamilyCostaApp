module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@types': './src/types',
          '@routes': './src/routes',
          '@styles': './src/styles',
          '@assets': './src/assets',
          '@api': './src/api',
          '@infra': './src/infra',
          '@domain': './src/domain',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@services': './src/services',
          '@components': './src/components',
          '@interfaces': './src/interfaces',
        },
      },
    ],
  ],
};
