const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  appKey: process.env.APP_KEY,
  baseUrl: process.env.BASE_URL,
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  firebase: {
    bucket: process.env.FIREBASE_BUCKET,
  },
  port: process.env.PORT,
};
