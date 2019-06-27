import fs from 'fs';
import path from 'path';

import app from '../../../package.json';
import { paths } from '../helpers/paths';

const readStaticFile = (file) => {
    if (!fs.existsSync(file)) return undefined;

    return fs.readFileSync(file, 'utf8');
};

const staticName = `${app.name}.${app.version}.min`;

const staticHtml = readStaticFile(path.join(paths.publicPath, 'index.html'));
const staticJs = readStaticFile(path.join(paths.staticPath, `${staticName}.js`));
const staticCss = readStaticFile(path.join(paths.staticPath, `${staticName}.css`));

console.log(staticHtml);
