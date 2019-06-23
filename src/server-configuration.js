import helmet from 'helmet';
import { logger } from './utils/logger';

/**
 * @param {Express} app
 */
export function security(app) {
  app.use(helmet());
  app.use(helmet.noCache());
}

export function errorHandler(err, req, res) {
  const custom = new Error();
  custom.message = err.message;
  custom.status = 400;

  res.status(400).json(custom);
}

export function logErrors(err, req, res, next) {
  if (!err.notLog) {
    logger.error(err);
  }
  next(err);
}
