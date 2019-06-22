import app from './server';
import { logger } from './utils/logger';
import { parserNumber } from './utils/parse-utils';

function main() {
  const port = parserNumber(process.env.PORT || '3000');

  // Start the server
  app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
  });
}

try {
  main();
} catch (error) {
  logger.error(error);
}
