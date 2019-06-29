import path from 'path';
import env from 'dotenv';

const config = env.config({
    path: path.resolve(`./env/.env.${process.env.ENV}`),
}).parsed;

console.log({ config });

export const getConfig = flag => config[flag] || process.env[flag];
