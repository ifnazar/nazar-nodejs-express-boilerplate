import helmet from 'helmet';
import noCache from 'nocache';

import { logger } from './utils/logger';

/**
 * @param {Express} app
 */
export function security(app) {
  app.use(helmet());
  app.use(noCache());
}

export function errorHandler(err, req, res, next) {
  if (!err) {
    res.status(500);
    res.render('error', { error: err });
  }
  next();
}

export function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

export function logErrors(err, req, res, next) {
  if (!err) {
    logger.error(err.stack);
  }
  next(err);
}
