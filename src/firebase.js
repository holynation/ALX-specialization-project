const { initializeApp, cert } = require("firebase-admin/app");
var serviceAccount = require("../service-account-key.json");
const config = require("./config");

const firebaseInstance = initializeApp({
  credential: cert(serviceAccount),
  storageBucket: config.firebase.bucket,
});

firebaseInstance.storage = require("firebase-admin/storage").getStorage;

module.exports = firebaseInstance;
