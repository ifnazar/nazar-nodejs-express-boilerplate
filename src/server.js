import express from 'express';
import bodyParser from 'body-parser';

// Configure express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;
