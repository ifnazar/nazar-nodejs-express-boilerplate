import express from 'express';
import bodyParser from 'body-parser';
import statusHandler from './routes/status-handler';

// Configure express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', statusHandler);

export default app;
