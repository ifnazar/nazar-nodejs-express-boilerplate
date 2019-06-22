/**
 * @param {String} value
 * @return {Number}
 */
const parserNumber = (value, defaultValue = null) => {
  const port = parseInt(value, 10);
  if (Number.isNaN(port)) {
    return defaultValue;
  }

  if (port >= 0) {
    return port;
  }

  return defaultValue;
};

/**
 * @param {String} value
 * @return {Boolean}
 */
const parserBoolean = (value, defaultValue = null) => {
  if (!value) {
    return defaultValue;
  }
  return Boolean(value);
};

export { parserNumber, parserBoolean };
