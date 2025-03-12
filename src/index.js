const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [new transports.Console()],
});

const slowpokeLogger = (options = {}) => {
  const threshold = options.threshold || 500;
  const logLevel = options.level || 'info';

  return (req, res, next) => {
    const start = process.hrtime();

    res.on('finish', () => {
      const [seconds, nanoseconds] = process.hrtime(start);
      const durationInMs = (seconds * 1000 + nanoseconds / 1e6).toFixed(2);

      if (durationInMs > threshold) {
        logger.log(logLevel, `Slow response: ${req.method} ${req.originalUrl} took ${durationInMs} ms`);
      } else {
        logger.info(`${req.method} ${req.originalUrl} responded in ${durationInMs} ms`);
      }
    });

    next();
  };
};

module.exports = slowpokeLogger;
