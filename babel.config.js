module.exports = function getBabelConfig(api) {
  api.cache(true);

  const plugins = [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '~': './src',
        },
        extensions: ['.js', '.ts', '.tsx'],
      },
    ],
    [
      'react-native-reanimated/plugin', {
          relativeSourceLocation: true,
      },
  ]
  ];

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
  };
};