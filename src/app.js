const cors = require("cors");
const express = require("express");
const createHttpError = require("http-errors");
const config = require("./config");
const { initDb } = require("./db");
const { formatResponse } = require("./utils");

async function createApp() {
  console.log("Starting up server...");

  const app = express();

  app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
  }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use((req, _res, next) => {
    const xAppKey = req.header("x-app-key");
    if (xAppKey !== config.appKey) {
      next(createHttpError(401, "Unauthorized request"));
    } else {
      next();
    }
  });

  await initDb();

  app.use("/", require("./file/file.route"));

  // 404 handler
  app.use((_req, _res, next) => {
    return next(createHttpError(404, "Not Found"));
  });

  // Error logging
  app.use((err, _req, _res, next) => {
    if (process.env.NODE_ENV !== "production") {
      if (createHttpError.isHttpError(err)) {
        console.error(err.name + ": " + err.message);
      } else console.error(err);
    }

    return next(err);
  });

  // Error handler
  app.use((err, _req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }

    if (createHttpError.isHttpError(err)) {
      return res
        .status(err.status)
        .json(formatResponse(err.message, null, err.name));
    }

    return res.status(500).json({
      message: "Internal Server Error",
    });
  });
  return app;
}
require("./jobs");
module.exports = createApp;
