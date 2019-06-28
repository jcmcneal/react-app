import Express from 'express';

import { paths } from './helpers/paths';

import middleware from './middleware';
import api from './api';
import ssr from './ssr';

const app = Express();

// Middleware
app.use(middleware);

// API
app.use('/api', api);

// Server Side Rendering
app.use(ssr);

// Static Files
app.use(Express.static(paths.publicPath));

export default app;
