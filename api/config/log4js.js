const path = require('path')
const APP_ROOT = path.join(__dirname, '../')

module.exports = {
  appenders: {
    consoleLog: {
      type: 'console'
    },
    systemLog: {
      type: 'file',
      filename: path.join(APP_ROOT, '../logs/system/system.log'),
      maxLogSize: 5000000, // 5MB
      backups: 5, // 世代管理は5ファイルまで、古いやつgzで圧縮されていく
      compress: true
    },
    applicationLog: {
      type: 'multiFile',
      base: path.join(APP_ROOT, '../logs/application/'),
      property: 'key',
      extension: '.log', // ファイルの拡張子はlogとする
      maxLogSize: 5000000, // 5MB
      backups: 5, // 世代管理は5ファイルまで、古いやつからgzで圧縮されていく
      compress: true
    },
    accessLog: {
      type: 'dateFile',
      filename: path.join(APP_ROOT, '../logs/access/access.log'),
      pattern: 'yyyy-MM-dd', // 日毎にファイル分割
      daysToKeep: 5, // 5日分の世代管理設定
      compress: true,
      keepFileExt: true
    }
  },
  categories: {
    default: {
      // appendersで設定した名称を指定する
      // levelは出力対象とするものを設定ここではALL（すべて）
      appenders: ['consoleLog'],
      level: 'ALL'
    },
    system: {
      appenders: ['systemLog'],
      level: 'ERROR'
    },
    application: {
      appenders: ['applicationLog'],
      level: 'ALL'
    },
    access: {
      appenders: ['accessLog'],
      level: 'INFO'
    }
  }
}
