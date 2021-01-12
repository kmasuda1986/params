const logger = require('../libs/logs/logger').application

module.exports = function (err, req, res, next) {
  logger.error(err.filename, err.errors, req)
  return res.status(err.statusCode).json(err.errors)
}
