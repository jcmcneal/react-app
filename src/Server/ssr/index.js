import path from 'path';
import Express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { paths } from '../helpers/paths';
import { readFile } from '../helpers/readFile';
import App from '../../App';

const ssr = Express();

const template = readFile(path.join(paths.publicPath, 'index.html'));

ssr.get('/', (req, res) => {
    res.send(
        template.replace('SSR_JS', ReactDOMServer.renderToString(<App />)),
    );
});

export default ssr;
