import Express from 'express';
import compression from 'compression';

import routes from './routes';

import { getConfig } from './helpers/config';

const app = Express();
const PORT = getConfig('PORT');
const ENV = getConfig('NODE_ENV');

app.use(compression());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT} [${ENV}]`);
});
