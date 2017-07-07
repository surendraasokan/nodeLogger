/**
 * Created by sasokan on 7/7/2017.
 */
var logrotate = require('logrotator');

// use the global rotator
var rotator = logrotate.rotator;

// or create a new instance
// var rotator = logrotate.create();

// check file rotation every 5 minutes, and rotate the file if its size exceeds 10 mb.
// keep only 3 rotated files and compress (gzip) them.
rotator.register('/var/log/myfile.log', {
    schedule: '5m',
    size: '10m',
    compress: true,
    count: 3,
    format: function(index) {
        var d = new Date();
        return d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear();
    }
});