const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        filename: 'dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[name]_[local]--[hash:base64:5]'
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            
                            modules: true,
                            localIdentName: '[name]_[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['transform-react-jsx', 'react-css-modules']
                    }
              }
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
}
