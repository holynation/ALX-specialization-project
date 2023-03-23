const express = require('express')
const config = require('../config')
const AppController = {};

AppController.getUploadPage = async (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
      <link href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAACeYFUAVCEYALV4bQBZLSUA/Pz8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARERERERERERAAAAAAAAABEEREAMwAREUQAEAMAMAAQRAAQAwAwABBEABADADAAEEQREAAzABEQRAAAAAAAAABEAAAAAAAAAEQDMAEREAMwRDADAAEAMANEMAMAAQAwA0QwAwABADADRAMwAREAAzBEIAAAAAAAAEREREREREREQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" rel="icon" type="image/x-icon" />
        <meta charset="UTF-8">
        <title>File Uploader</title>
        <style>
            body {
                background-color: #0077b6;
            }
            input[type="submit"] {
                background-color: #caf0f8;
                border: none;
                color: #333;
                padding: 10px 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                cursor: pointer;
                border-radius: 4px;
            }
            input[type="file"] {
                padding: 10px;
                border-radius: 4px;
            }
            label {
                color: #fff;
                font-size: 18px;
                font-weight: bold;
                margin-right: 10px;
            }
            h1 {
                color: #fff;
                font-size: 36px;
                margin-bottom: 30px;
            }
        </style>
      </head>
      <body>
        <h1>Welcome to PrivShare</h1>
        <form action="/upload" method="post" enctype="multipart/form-data">
          <label for="file">Select a file:</label>
          <input type="file" id="file" name="file">
          <br><br>
          <input type="submit" value="Upload">
        </form>
      </body>
    </html>
  `;
  // Set authorization header
  res.set('Authorization', 'Bearer ${config.authToken}');

  // Send response with HTML and authorization header
  res.send(html);
};

module.exports = AppController;
