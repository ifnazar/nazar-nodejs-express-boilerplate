/**
 */
class Logger {
  info(message) {
    const timestamp = new Date().toISOString();
    // eslint-disable-next-line no-console
    console.log(`${timestamp} - ${message}`);
  }

  error(error) {
    const message = error.stack || error;
    const timestamp = new Date().toISOString();
    // eslint-disable-next-line no-console
    console.error(`${timestamp} - ${message}`);
  }

  warn(message) {
    const timestamp = new Date().toISOString();
    // eslint-disable-next-line no-console
    console.warn(`${timestamp} - ${message}`);
  }
}
const logger = new Logger();

export { Logger, logger };
