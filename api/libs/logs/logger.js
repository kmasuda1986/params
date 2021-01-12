require('date-utils')
const log4js = require('log4js')
const config = require('../../config/log4js')
// eslint-disable-next-line import/order
const levels = require('log4js/lib/levels').levels
log4js.configure(config)

// それぞれのログ種別ごとに作成
const console = log4js.getLogger()
const system = log4js.getLogger('system')
const access = log4js.getLogger('access')
const ApplicationLogger = function () {
  this.logger = log4js.getLogger('application')
}
const proto = ApplicationLogger.prototype
for (let level of levels) {
  level = level.toString().toLowerCase()
  proto[level] = (function (level) {
    return function (key, message, req) {
      let msg = message

      if (req.headers.authorization !== undefined) {
        msg += ' ' + req.headers.authorization
      }

      for (const index in req.body) {
        msg += ' { "' + index + '": "' + req.body[index] + '" }'
      }

      const logger = this.logger
      logger.addContext('key', key + '_' + new Date().toFormat('YYYYMMDD'))
      logger[level](msg)
    }
  })(level)
}

const application = new ApplicationLogger()

// ログ種別のエクスポート
module.exports = {
  console,
  system,
  application,
  access
}
