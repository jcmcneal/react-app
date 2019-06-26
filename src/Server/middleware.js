import Express from 'express';

const app = Express();

app.use((req, res, next) => {
    const now = new Date().toLocaleString();
    console.log(`[${now}][${req.method}] ${req.originalUrl}`);

    next();
});

export default app;
