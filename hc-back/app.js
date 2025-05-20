import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
    })
);

export default app;