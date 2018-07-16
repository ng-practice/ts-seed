# TypeScript Seed

> https://www.typescriptlang.org/

## TypeScript Configuration

```json
// tsconfig.json

{
  "compilerOptions": {
    "outDir": "./dist/",
    "module": "commonjs",
    "target": "es5"
  }
}
```

## Webpack Configuration

```js
// webpack.config.js

module.exports = {
  entry: './src/app.module.ts',
  output: { filename: './dist/app.js' },
  resolve: { extensions: ['.ts'] },
  module: {
    loaders: [{ test: /\.ts$/, loader: 'awesome-typescript-loader' }]
  }
};
```
