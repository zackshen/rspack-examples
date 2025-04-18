const { rspack } = require('@rspack/core');
/** @type {import('@rspack/cli').Configuration} */
const config = {
  context: __dirname,
  entry: {
    main: './src/index.jsx',
  },
  experiments: {
    css: true,
  },
  resolve: {
    extensions: ['...', '.ts', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        type: 'css',
      },
      {
        test: /\.module.css$/,
        type: 'css/module',
        parser: {
          namedExports: false,
        },
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
      },
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['solid']],
              plugins: ['solid-refresh/babel'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
    }),
  ],
};
module.exports = config;
