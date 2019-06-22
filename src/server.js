import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import statusHandler from './routes/status-handler';
import { logger } from './utils/logger';

/**
 * @param {Express} app
 */
function configureSecurity(app) {
  app.use(helmet());
  app.use(helmet.noCache());
}

function errorHandler(err, req, res) {
  const custom = new Error();
  custom.message = err.message;
  custom.status = 400;

  res.status(400).json(custom);
}

function logErrors(err, req, res, next) {
  if (!err.notLog) {
    logger.error(err);
  }
  next(err);
}

// Configure express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configureSecurity(app);

// Routes
app.get('/', statusHandler);

// Error handler
app.use(logErrors);
app.use(errorHandler);

export default app;
