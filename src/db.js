const { Sequelize } = require("sequelize");
const config = require("./config");

/**
 * @type {Sequelize | undefined}
 */
let sequelize;

async function initDb() {
  console.log("Intializing database...");

  sequelize = new Sequelize({
    dialect: "mysql",
    host: config.db.host,
    port: config.db.port,
    database: config.db.name,
    username: config.db.user,
    password: config.db.password,
  });

  try {
    await sequelize.authenticate();
    console.log("Connected to the database successfully.");

    // Needs to be run before synchronisation
    require("./file/file.model");

    sequelize = await sequelize.sync();
    console.log("Synchronized the database successfully.");
  } catch (error) {
    console.error(
      "Encountered an error while connecting to the database:",
      error
    );
  }
}

async function closeDb() {
  await sequelize?.close();
}

function getSequelize() {
  return sequelize;
}

module.exports = {
  getSequelize,
  initDb,
  closeDb,
};
