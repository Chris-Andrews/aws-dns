var extIP = require('external-ip');

var getIP = extIP({
    timeout: 1000,
    getIP: 'sequential' // 'sequential' | 'parallel'
});

getIP(function (err, ip) {
    if (err) {
        throw err;
        // return?
    }
    console.log(ip);
});



/*
---------------------------------------------------
*/

var AWS = require('aws-sdk');

var credentials = require('./credentials.json');
