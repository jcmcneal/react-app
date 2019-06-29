/**
 * Called with `yarn build:server`
 */
const Webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const env = require('dotenv').config({
    path: path.resolve(`./env/.env.${process.env.ENV}`),
}).parsed;

const config = require('./webpack.config');

config.entry = {
    server: './src/Server/index.js',
};

config.target = 'node';
config.externals = [nodeExternals()];
config.plugins = [
    new Webpack.DefinePlugin(Object.entries(env).reduce((prev, [key, value]) => ({
        ...prev,
        [`process.env.${key}`]: JSON.stringify(value),
    }), {})),
];

/** Export */
module.exports = config;
