require('date-utils')
// const path = require('path')
// const Logger = require('../libs/logs/logger').application
// const Const = require('../constants/const.js')
// const Response = require('../libs/response.js')
const validate = require('../libs/validate.js')
// const LOG_FILENAME = path.basename(__filename, '.js') + '_' + new Date().toFormat('YYYYMMDD')

module.exports = async function (req, res) {
  try {
    const errorMessage = await validate.checkParams(req)
    if (errorMessage !== null) {
      throw new Error(errorMessage)
    }

    const data = {
      token: '6c90e96f0f18626586672eb733b2eb1346f67f4dcaf748ab1accbfbf628ac50c'
    }

    return data
  } catch (e) {
    //
  }
}
