const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: "webworker",
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map'
};