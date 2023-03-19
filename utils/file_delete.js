"use strict"

const https = require('https');

exports.delete_file = (file_name) => {
    const req = https.request("https://api.dropboxapi.com/2/file_requests/delete", {
        method : 'POST',
        'contentType': 'application/json',
        "payload" : JSON.stringify({"path": "/Upload/another_weird.html"}),
        "Bearer realm": "Dropbox-API",
        headers: {
            'Authorization': `Bearer ${TOKEN}`,
            }
        },
    (res) => {
        console.log("Status code: ", res.statusCode);
        console.log(res.headers);
    }).on('data', (d) => {
        console.log(d);
    }).on('error', (err) => {
        console.log(`Error: ${err}`);
    });
    req.end();
}