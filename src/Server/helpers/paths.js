import path from 'path';

/** Paths */
const rootDir = path.resolve();
const publicPath = path.join(rootDir, 'dist');
const staticPath = path.join(publicPath, 'static');

export const paths = {
    rootDir,
    publicPath,
    staticPath,
};

console.log({ paths });
