let randomstring = require("randomstring");
let htmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname + '/build',
        filename:  randomstring.generate(24) + '.js'
    },
    plugins: [
        new htmlWebPackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              { loader: 'style-loader' }, 
              { loader: 'css-loader' }
            ],
          },
        ],
      }
}