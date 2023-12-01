import path from 'path';

const config = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve('dist'),
  },
  module: {
    rules: [
      { test: /\.ts?x$/, use: 'ts-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  mode: 'development',
};

export default config;