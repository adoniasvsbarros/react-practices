const devMode = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: devMode ? 'development': 'production',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader, // extracts CSS to external file
                //'style-loader', // Add CSS to DOM injecting <style> tag
                'css-loader', // interprets @import, url()...
                'sass-loader'
            ]
        }]
    }
}