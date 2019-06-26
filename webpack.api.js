/**
 * Called with `yarn build:api`
 */
const Webpack = require('webpack');
const env = require('dotenv').config();

// const app = require('./package.json');
const config = require('./webpack.config');

config.entry = {
    server: './src/Server/index.js',
};
config.target = 'node';

config.plugins = [
    new Webpack.DefinePlugin(Object.entries(env.parsed).reduce((prev, [key, value]) => ({
        ...prev,
        [`process.env.${key}`]: JSON.stringify(value),
    }), {})),
];

/** Export */
module.exports = config;
