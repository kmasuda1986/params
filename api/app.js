const app = require('express')()
const helmet = require('helmet')
const compression = require('compression')
const bodyParser = require('body-parser')
const passport = require('passport')
const v1Routes = require('./routes/v1/index.js')
const errorHandler = require('./middlewares/errorHandler.js')
const systemLogger = require('./libs/logs/systemLogger')
const accessLogger = require('./libs/logs/accessLogger')

// Web の脆弱性からアプリケーションを保護
// https://expressjs.com/ja/advanced/best-practice-security.html
app.use(helmet())
app.disable('x-powered-by')

// gzip 圧縮を使用する
app.use(compression())

// POSTパラメータ取得できるように
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ロギング
app.use(systemLogger())
app.use(accessLogger())

// session用のmiddlewaresを有効化
app.use(passport.initialize())
app.use(passport.session())

// ルーティング
app.use('/v1', v1Routes)

// エラーハンドラ
app.use(errorHandler)

module.exports = {
  path: '/api/',
  handler: app
}
