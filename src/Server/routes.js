import Express from 'express';
import path from 'path';

import middleware from './middleware';
import api from './api';
import './ssr';
import { paths } from './helpers/paths';

const app = Express();

// Middleware
app.use(middleware);

// API
app.use('/api', api);

// Static Files
app.use(Express.static(paths.publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(paths.publicPath, 'index.html'));
});

export default app;
