"use strict"
const token = require("./token");
const TOKEN = token.TOKEN;
const https = require('https');
const fs = require('fs');
exports.upload_file = (filename) => {
	fs.readFile(filename, 'utf8', function (err, data) {
		const req = https.request('https://content.dropboxapi.com/2/files/upload', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${TOKEN}`,
				'Dropbox-API-Arg': JSON.stringify({
					'path': `/Upload/${filename}`,
					'mode': 'overwrite',
					'autorename': true, 
					'mute': false,
					'strict_conflict': false
				}),
				'Content-Type': 'application/octet-stream',
			}
		}, (res) => {
			console.log("statusCode: ", res.statusCode);
			console.log("headers: ", res.headers);
			if (res.statusCode == 200)
			{
				/** put setTimeout here */
			}
			/**res.on('data', function(d) {
				process.stdout.write(d);
			});*/
		});
	
		req.write(data);
		req.end();
	});
};