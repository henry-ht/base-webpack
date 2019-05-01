const Randomstring = require("randomstring");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname + '/build',
        filename:  /* Randomstring.generate(24) + */ 'js/app.js'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new CopyPlugin([{ 
            from: './src/img',
            to: 'img' 
        },
        { 
          from: './src/manifest.json',
          to: './' 
      }]),
      new MiniCssExtractPlugin({
        filename: './css/[name].css',
        chunkFilename: '[id].css',
      })
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../',
                  hmr: process.env.NODE_ENV === 'development',
                },
              },
              'css-loader',
            ],
          },
        ],
      }
}