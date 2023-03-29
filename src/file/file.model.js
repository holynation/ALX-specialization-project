const { DataTypes, Model, Op } = require("sequelize");
const { getSequelize } = require("../db.js");

class File extends Model {
  /**
   * @param {string} id
   */
  static async findOneNotExpired(id) {
    return await File.findOne({
      where: {
        id,
        expiresAt: {
          [Op.gt]: new Date(),
        },
      },
    });
  }

  static async findExpiredFiles() {
    return await File.findAll({
      where: {
        expiresAt: {
          [Op.lt]: new Date(),
        },
      },
    });
  }

  /**
   * @typedef {Object} FileCreationOptions
   * @property {string} name
   * @property {string} bucket Bucket name.
   * @property {string} path File path in bucket.
   * @property {string} url Public url.
   * @property {number} expiresAfter Number of minutes after which the file should expire.
   */

  /**
   * Create a new file with an expiration date `expiresAfter` in minutes.
   * @param {FileCreationOptions} options
   */
  static async createWithExpiration({ name, bucket, path, url, expiresAfter }) {
    const file = await File.create({
      name,
      bucket,
      path,
      url,
      expiresAt: new Date(Date.now() + expiresAfter * 60 * 1000),
    });

    return file;
  }
}

File.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    bucket: DataTypes.STRING,
    path: DataTypes.STRING,
    url: DataTypes.STRING,
    expiresAt: DataTypes.DATE,
  },
  {
    sequelize: getSequelize(),
  }
);

exports.File = File;
