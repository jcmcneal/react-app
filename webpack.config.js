// "build": "export NODE_ENV=production; webpack --progress --optimize-minimize --mode=production",
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const args = require('minimist')(process.argv.slice(2));
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const env = require('dotenv').config();
const app = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

const config = {
    entry: {
        [`${app.name}.${app.version}`]: './src/App.js',
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].min.js',
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve('src/index.js'),
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /(\.less)$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
                    'less-loader',
                ],
            },
        ],
    },
    node: {
        Buffer: false,
    },
    plugins: [
        new webpack.DefinePlugin(Object.entries(env.parsed).reduce((prev, [key, value]) => ({
            ...prev,
            [`process.env.${key}`]: JSON.stringify(value),
        }), {})),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Custom template',
            template: 'src/index.html',
            minify: isProd,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].min.css',
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                mangle: true,
                output: {
                    comments: false,
                },
            },
        }),
    ],
    stats: {
        builtAt: false,
        hash: false,
        modules: false,
        version: false,
    },
};

if (args.analyze) config.plugins.push(new BundleAnalyzerPlugin());

module.exports = config;
