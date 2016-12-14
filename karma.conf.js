var webpack = require("webpack"),
    path = require("path");
// Karma configuration Generated on Mon May 11 2015 14:13:57 GMT-0600 (MDT)
module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        files: [
          {pattern: 'test/**/*.test.js', included: true},
          {pattern: 'lib/**/*.js', included: false},
        ],
        preprocessors: {
            "test/**/*.test.js": ["webpack"]
        },
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: "jsx-loader"
                    }, {
                        test: /\.css$/,
                        loaders: [
                        'style',
                        'css',
                        'postcss'
                        ]
                    },
                    {
                        test: /\.(png|jpg|gif|svg)$/,
                        loader: 'url-loader?limit=8192'
                    }
                ]
            },
            plugins: [new webpack.ResolverPlugin([
                    new webpack
                        .ResolverPlugin
                        .DirectoryDescriptionFilePlugin("package.json", ["main"])
                ])],
            resolve: {
                root: [
                    path.join(__dirname, "./node_modules"),
                    path.join(__dirname, "./src")
                ]
            }
        },
        webpackMiddleware: {
            noInfo: true
        },
        plugins: [
            require("karma-webpack"), require("karma-jasmine"), require("karma-chrome-launcher")
        ],
        reporters: ["dots"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        singleRun: false
    });
};