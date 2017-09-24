module.exports = {
  entry: './src/app.module.ts',
  output: {
    filename: './dist/app.js'
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    }]
  }
}