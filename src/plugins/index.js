const { getAge } = require("./get-age.plugin");
const { getUUID } = require("./get-id.plugin");
const { http } = require("./http-client.plugin");
const buildLogger = require("../plugins/logger.plugin");

module.exports = {
  getAge,
  getUUID,
  buildLogger,
  http,
};
