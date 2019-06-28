import fs from 'fs';

export const readFile = (file) => {
    if (!fs.existsSync(file)) return undefined;

    return fs.readFileSync(file, 'utf8');
};
