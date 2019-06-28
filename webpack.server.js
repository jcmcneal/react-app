/**
 * Called with `yarn build:server`
 */
const Webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const env = require('dotenv').config();

const mergedEnv = {
    ...env.parsed,
    CLIENT_SIDE: false,
    SERVER_SIDE: true,
};

const config = require('./webpack.config');

config.entry = {
    server: './src/Server/index.js',
};

config.target = 'node';
config.externals = [nodeExternals()];
config.plugins = [
    new Webpack.DefinePlugin(Object.entries(mergedEnv).reduce((prev, [key, value]) => ({
        ...prev,
        [`process.env.${key}`]: JSON.stringify(value),
    }), {})),
];

/** Export */
module.exports = config;
