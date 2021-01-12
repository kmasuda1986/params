const consts = require('../config/constants.js')
const logger = require('./logs/logger').application

/**
 * success
 *
 * @param {string} res
 * @param {Object} object
 */
function success (res, object, filename) {
  logger.info(filename, consts.logMessege.RESPONSE, object)
  return res.status(consts.httpStatusCode.OK).json(object)
}

module.exports = {
  success
}
