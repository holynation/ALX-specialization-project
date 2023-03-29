const { Router } = require("express");
const { formatResponse } = require("../utils");
const { File } = require("./file.model");
const { multer } = require("../storage");
const config = require("../config");
const createHttpError = require("http-errors");
const {MulterError} = require("multer");

const upload = multer.single("file");
const fileRouter = Router();

fileRouter.post(
  "/upload",
  (req, res, next) => {
    upload(req, res, function (err) {
      if (!err) return next();

      console.log(typeof(err))
      console.log(err)
      if (err instanceof MulterError) {
        next(createHttpError(400, err.message));
      } else {
        next(err);
      }
    });
  },
  async (req, res, next) => {
    try {
      const { expiresAfter = 1440 } = req.body;

      if (!req.file) {
        throw createHttpError(400, "No file was uploaded");
      }

      const file = await File.createWithExpiration({
        name: req.file.originalname,
        bucket: req.file.bucket,
        path: req.file.path,
        url: req.file.publicUrl,
        expiresAfter,
      });

      return res.status(201).json(
        formatResponse("File uploaded successfully", {
          id: file.id,
          name: file.name,
          url: file.url,
        })
      );
    } catch (error) {
      return next(error);
    }
  }
);

fileRouter.get("/file/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const file = await File.findOneNotExpired(id);

    if (!file) {
      throw createHttpError(404, "File not found. It probably expired.");
    }

    return res.status(200).json(
      formatResponse("File retrieved successfully", {
        id: file.id,
        name: file.name,
        url: file.url,
      })
    );
  } catch (error) {
    return next(error);
  }
});

module.exports = fileRouter;
