'use strict';

const url = require('url');
const https = require('https');

module.exports = function (hookUrl){
  this.postMessage = function(message) {
      const body = JSON.stringify(message);
      const options = url.parse(hookUrl);
      options.method = 'POST';
      options.headers = {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
      };

      console.log("Sending notification to slack: " + body);

      return new Promise((resolve, reject) => {
          var postReq = https.request(options, function(res) {
              var chunks = [];
              res.setEncoding('utf8');
              res.on('data', function(chunk) {
                  return chunks.push(chunk);
              });
              res.on('end', function() {
                  var body = chunks.join('');
                  resolve({
                      body: body,
                      statusCode: res.statusCode,
                      statusMessage: res.statusMessage
                  });
              });
              return res;
          });

          postReq.write(body);
          postReq.end();
      });
  }
}
