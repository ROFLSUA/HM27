const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // Вказати головний файл JS
  output: {
    filename: 'bundle.js', // Вказати назву вихідного JS файлу
    path: path.resolve(__dirname, 'dist') // Вказати шлях до папки виводу
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Розпізнати файли JS
        exclude: /node_modules/,
        use: 'babel-loader' // Використовувати Babel для трансляції
      },
      {
        test: /\.scss$/, // Розпізнати файли SCSS
        use: [
          MiniCssExtractPlugin.loader, // Для виносу CSS в окремий файл
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css' // Вказати назву вихідного CSS файлу
    })
  ]
};
