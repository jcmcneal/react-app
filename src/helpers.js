import env from 'dotenv';

const config = env.config().parsed;

console.log(config);

export const getConfig = flag => config[flag] || process.env[flag];
