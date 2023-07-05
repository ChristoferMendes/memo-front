module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve('expo-router/babel'),
      'react-native-reanimated/plugin',
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            '@screens': './screens',
            '@utils': './utils',
            '@assets': './assets',
            '@hooks': './hooks',
            '@constants': './constants',
            '@graphql': './graphql',
            '@services': './services',
            '@components': './components',
          },
        },
      ],
    ],
  };
};
