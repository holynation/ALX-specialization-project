const { createServer } = require("http");
const createApp = require("./app");
const config = require("./config");
const { closeDb } = require("./db");

createApp().then((app) => {
  const server = createServer(app);

  // Fail gracefully
  process.on("SIGTERM", () => {
    console.log("SIGTERM received. Shutting down gracefully");

    closeDb()
      .then(() => {
        console.log("Database connection closed");
      })
      .finally(() => {
        server.close(() => {
          console.log("Server terminated!");
        });
      });
  });

  process.on("SIGINT", () => {
    console.log("SIGINT received. Shutting down gracefully");

    closeDb()
      .then(() => {
        console.log("Database connection closed");
      })
      .finally(() => {
        server.close(() => {
          console.log("Server terminated!");
        });
      });
  });

  server.listen(config.port, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
  });
});
