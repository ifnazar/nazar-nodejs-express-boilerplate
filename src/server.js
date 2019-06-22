import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import statusHandler from './routes/status-handler';

/**
 * @param {Express} app
 */
function configureSecurity(app) {
  app.use(helmet());
  app.use(helmet.noCache());
}

// Configure express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configureSecurity(app);

// Routes
app.get('/', statusHandler);

export default app;
