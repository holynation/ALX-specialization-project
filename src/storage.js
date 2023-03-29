const Multer = require("multer");
const FirebaseStorage = require("multer-firebase-storage");
const config = require("./config");
const firebaseInstance = require("./firebase");

exports.multer = Multer({
  storage: FirebaseStorage(
    {
      public: true,
      directoryPath: "files",
      unique: true,
      bucketName: config.firebase.bucket,
    },
    firebaseInstance
  ),
});
