import express from 'express';
import bodyParser from 'body-parser';
import statusHandler from './routes/status-handler';
import * as serverConfig from './server-configuration';

// Configure express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

serverConfig.security(app);

// Routes
app.get('/', statusHandler);

// Error handler
app.use(serverConfig.logErrors);
app.use(serverConfig.errorHandler);

export default app;
