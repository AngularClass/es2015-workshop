var path = require('path');

module.exports = {
  entry: './src/lessons/index',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'src')
  },
  devtool: '#source-maps',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
