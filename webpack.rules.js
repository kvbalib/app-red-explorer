const scssRegex = /\.scss$/i;
const scssModuleRegex = /\.module\.scss$/i;

module.exports = [
  {
    test: /native_modules\/.+\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    test: scssRegex,
    exclude: scssModuleRegex,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            mode: 'icss',
          },
        },
      },
      {
        loader: 'sass-loader',
      },
    ],
  },
  {
    test: scssModuleRegex,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            mode: 'local',
          },
        },
      },
      {
        loader: 'sass-loader',
      },
    ],
  },
];
