const path = require('path') 
const webpack = require('webpack')
const  HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js'
      },
          module: {
            rules: [
                {
                    test: '/\.js$/',
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
              template: "./src/client/views/index.html",
              filename: "./index.html",
            })
        ]
       
}