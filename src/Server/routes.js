import Express from 'express';
import path from 'path';

import middleware from './middleware';
import api from './api';

const app = Express();
const rootDir = path.resolve();
const publicPath = path.join(rootDir, 'dist');

// Middleware
app.use(middleware);

// API
app.use('/api', api);

// Static Files
app.use(Express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

export default app;
