"use strict"

require('dotenv').config();
const TOKEN = process.env.TOKEN;
const https = require('node:https');

exports.get_metadata = (file_name) => {
    const options = {
        hostname : "api.dropboxapi.com",
        method : "POST",
        path : "/files/get_metadata",
        headers : {
            "Authorization" : `Bearer ${TOKEN}`,
            "Content-Type" : "application/json"
        },
        parameters : {
            "include_deleted": false,
            "include_has_explicit_shared_members": false,
            "include_media_info": false,
            "path": `/Upload/${file_name}`
        }
    };
    const req = https.request(options, (res) => {
        console.log('statusCode: ', res.statusCode);
        console.log('headers: ', res.headers);

        res.on('data', (d) => {
            process.stdout.write(d);
        });
    });
    req.on('error', (e) => {
        console.error(e);
    });
    req.end();
}