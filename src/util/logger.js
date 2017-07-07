/**
 * Created by sasokan on 7/7/2017.
 */
/**
 * Configurations of logger.
 */
const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');

const consoleConfig = [
    new (winston.transports.Console)({
        'colorize': true
    })
];

const createLogger = new (winston.Logger)({
    'transports': consoleConfig
});

const successLogger = createLogger;
successLogger.add(winstonRotator, {
    'name': 'access-file',
    'level': 'info',
    'filename': 'access.log',
    'json': false,
    'datePattern': 'yyyy-MM-dd-',
    'prepend': true
});

const errorLogger = createLogger;
errorLogger.add(winstonRotator, {
    'name': 'error-file',
    'level': 'error',
    'filename': 'error.log',
    'json': false,
    'datePattern': 'yyyy-MM-dd-',
    'prepend': true
});

module.exports = {
    'successlog': successLogger,
    'errorlog': errorLogger
};
