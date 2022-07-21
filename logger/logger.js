const {format, createLogger, transports} = require('winston');
const { combine, timestamp, printf } = format;
const logFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  
    format: combine(
      timestamp(),
      logFormat
    ),
    transports: [new transports.Console()]
  });

  
  module.exports = logger;