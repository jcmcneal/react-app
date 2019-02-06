/**
 * Called with `yarn dev`
 */
const Webpack = require('webpack');
const config = require('./webpack.config');

/** Is Development */
const isDev = process.env.NODE_ENV !== 'production';

/** Development */
if (isDev) {
    /** Server Settings */
    const server = {
        domain: 'localhost',
        index: 'index.html',
        path: 'dist/',
        port: 7000,
        protocol: 'http',
        root: 'dist/',
    };

    const host = `${server.protocol}://${server.domain}:${server.port}`;
    const publicPath = `${host}/${server.path}`;

    config.output.publicPath = publicPath;
    config.devServer = {
        compress: true,
        host: '0',
        index: server.index,
        openPage: server.root,
        overlay: {
            warnings: false,
            errors: true,
        },
        port: server.port,
        public: host,
        publicPath,
        stats: config.stats,
    };
    config.optimization = {
        minimize: false,
    };
    config.plugins.push(new Webpack.HotModuleReplacementPlugin());
}

/** Export */
module.exports = config;
