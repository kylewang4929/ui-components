var webpack = require('webpack');
var path = require('path');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    //plugins: [commonsPlugin],
    //页面入口文件配置
    entry: path.resolve(__dirname, 'main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.(css|scss)$/,
                loaders: [
                'style',
                'css',
                'sass',
                'postcss'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test   : /\.woff/,
                loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
            }, {
                test   : /\.ttf/,
                loader : 'file?prefix=font/'
            }, {
                test   : /\.eot/,
                loader : 'file?prefix=font/'
            }, {
                test   : /\.svg/,
                loader : 'file?prefix=font/'
            },
            {
                test: /\.js$/,
                loader: "jsx-loader"
            },
            {
                test: /\.jsx?$/,
                loader: 'babel'
            }
        ]
    }
};