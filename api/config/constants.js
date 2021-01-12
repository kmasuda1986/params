module.exports = {
  logMessege: {
    REQUEST: 'request',
    RESPONSE: 'response'
  },
  httpStatusCode: {
    OK: 200,
    BAD_REQUEST: 400
  },
  errors: {
    // 100系: リクエストパラメータエラー
    INVALID_EMAIL: {
      code: 100,
      message: 'メールアドレスが不正です。'
    },
    INVALID_PASSWORD: {
      code: 101,
      message: 'パスワードが不正です。'
    },
    INVALID_ACCESS_TOKEN: {
      code: 102,
      message: 'アクセストークンが不正です。'
    }
  }
}
