"use strict"
const file_download = require("./file_download");
const upload_file = require("./file_upload");
const upload = upload_file.upload_file;
const download_file = file_download.download_file;
const get_data = require("./get_metadata");
const get_meta = get_data.get_metadata;
get_meta("test.txt");