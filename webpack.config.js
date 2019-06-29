// "build": "export NODE_ENV=production; webpack --progress --optimize-minimize --mode=production",
const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const args = require('minimist')(process.argv.slice(2));
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const env = require('dotenv').config({
    path: path.resolve(`./env/.env.${process.env.ENV}`),
}).parsed;
const app = require('./package.json');

console.log(env);
const isProd = env.NODE_ENV === 'production';

const config = {
    entry: {
        [`${app.name}.${app.version}`]: './src/App.js',
    },
    output: {
        path: path.resolve('dist'),
        filename: 'static/[name].min.js',
    },
    resolve: {
        alias: {
            Assets: path.resolve(__dirname, './assets'),
        },
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
                    (isProd && env.CLIENT_SIDE) ? MiniCssExtractPlugin.loader : 'isomorphic-style-loader',
                    'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'modules',
                    chunks: 'initial',
                },
            },
        },
    },
    plugins: [
        new webpack.DefinePlugin(Object.entries(env).reduce((prev, [key, value]) => ({
            ...prev,
            [`process.env.${key}`]: JSON.stringify(value),
        }), {})),
        new HtmlWebpackPlugin({
            hash: true,
            title: app.description,
            template: 'src/index.html',
            minify: isProd,
        }),
        new MiniCssExtractPlugin({
            filename: 'static/[name].min.css',
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
