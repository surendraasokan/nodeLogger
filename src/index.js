/**
 * Created by sasokan on 7/7/2017.
 */
const errorLog = require('./util/logger').errorlog;
const successlog = require('./util/logger').successlog;

successlog.info('Success Message and variables: ${variable}');
errorLog.error('Error Message : ${error}');

