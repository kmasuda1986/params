/* eslint-disable no-console */
const path = require('path')
const filename = path.basename(__filename, '.js')
const logger = require('../libs/logs/logger').application
const consts = require('../config/constants.js')
const sequelize = require('../config/sequelize.js')
const response = require('../libs/response.js')
const validate = require('../libs/validate.js')

module.exports = async function (req, res, next) {
  try {
    logger.info(filename, consts.logMessege.REQUEST, req)

    await sequelize.authenticate()

    const errors = await validate.checkParams(req, filename)
    if (errors !== null) { return next(errors) }

    const data = {
      token: '6c90e96f0f18626586672eb733b2eb1346f67f4dcaf748ab1accbfbf628ac50c'
    }

    return await response.success(res, data, filename)
  } catch (e) {
    console.error(e)
  }
}
