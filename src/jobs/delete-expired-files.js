require("../firebase");
const { getStorage } = require("firebase-admin/storage");
const { closeDb, initDb } = require("../db");

async function deleteExpiredFiles() {
  await initDb();
  const { File } = require("../file/file.model");

  console.log("Deleting expired files...");

  const files = await File.findExpiredFiles();
  const storage = getStorage();
  const bucket = storage.bucket();

  for (let file of files) {
    bucket.file(file.path).delete();
  }

  await File.destroy({ where: { id: files.map((file) => file.id) } });

  console.log("Deleted expired files successfully.");
  await closeDb;
}

module.exports = deleteExpiredFiles;

deleteExpiredFiles();
