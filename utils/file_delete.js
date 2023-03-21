"use strict"

const https = require('node:https');
require('dotenv').config();
const TOKEN = process.env.TOKEN;

exports.delete_file = (file_name) => {
    const req = https.request("https://api.dropboxapi.com/2/files/delete_v2?path=/Upload/another_weird.html", {
        method : 'POST',
        'contentType': 'application/json',
        /*"payload" : JSON.stringify({"path": "/Upload/another_weird.html"}),
        "Bearer realm": "Dropbox-API",*/
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