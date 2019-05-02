const Randomstring            = require("randomstring");
const HtmlWebPackPlugin       = require('html-webpack-plugin');
const CopyPlugin              = require('copy-webpack-plugin'); 
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin          = require('terser-webpack-plugin');
const RemovePlugin            = require('remove-files-webpack-plugin');


module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: __dirname + '/build',
        filename:  'js/' + Randomstring.generate(24) + '.js'
    },
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new RemovePlugin({
            before: {
              include: ['build']
            },
            after: {
                // parameters.
            }
        }),
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
        filename: 'css/'+ Randomstring.generate(24) +'.css',
        chunkFilename: '[id].css',
      })
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader, 'css-loader',
            ],
          },

        ],
      }
}