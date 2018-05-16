const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config');

const obj = Object.assign(
    base, 
    {
        entry: path.join(__dirname, 'index.js'),
        output: {
            filename: 'dist/bundle.js',
            library: "ReactComponentLibrary",
            libraryTarget: "umd",
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
);
module.exports = obj;