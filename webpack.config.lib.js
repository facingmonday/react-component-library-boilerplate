const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config');
module.exports = {
    ...base,
    entry: path.join(__dirname, 'index.js'),
    output: {
        filename: 'lib/bundle.js',
        libraryTarget: "commonjs2",
    },
    externals: [
        {
          react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
          }
        }
    ]
}
