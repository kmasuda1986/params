const { validationResult } = require('express-validator')
const consts = require('../config/constants.js')

function checkParams (req, filename) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      // eslint-disable-next-line no-console
      console.error(errors)
      return {
        filename,
        statusCode: consts.httpStatusCode.BAD_REQUEST,
        errors: errors.errors[0].msg
      }
    } else {
      return null
    }
  } catch (e) {
    //
  }
}

module.exports = {
  checkParams
}
