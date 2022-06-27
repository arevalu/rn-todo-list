module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@components': './src/components',
          '@core': './src/core',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
