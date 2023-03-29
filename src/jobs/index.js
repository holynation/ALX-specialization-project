const cron = require("node-cron");
const deleteExpiredFiles = require("./delete-expired-files");

cron.schedule("59 23 * * *", deleteExpiredFiles);
