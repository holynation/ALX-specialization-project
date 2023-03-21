"use strict"
require('dotenv').config();
const TOKEN = process.env.TOKEN;
var https = require("https");
exports.download_file  = (file_name) => {
    const req = https.request('https://content.dropboxapi.com/2/files/download', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${TOKEN}`,
            'Dropbox-API-Arg': JSON.stringify({
                'path': `/Upload/${file_name}`,
            })
        },

    }, (res) => {
            console.log("statusCode: ", res.statusCode);
            console.log(res.headers["dropbox-api-result"]);
            /**file_name = JSON.parse(res.headers["dropbox-api-result"])*/
            console.log(res.headers);

        res.on('data', function(d) {
            process.stdout.write(d);
        });
    }).on('error', (err) => {
        process.stderr.write(`${err}`);
    })
    req.end();
};