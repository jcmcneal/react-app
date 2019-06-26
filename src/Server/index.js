import Express from 'express';
import { getConfig } from '../helpers';

import routes from './routes';

const app = Express();
const PORT = getConfig('PORT');
const ENV = getConfig('NODE_ENV');

app.use(routes);

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT} [${ENV}]`);
});
