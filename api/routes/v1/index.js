const router = require('express').Router()
const { body, header } = require('express-validator')
const consts = require('../../config/constants.js')

// ログインAPI
router.post('/login',
  body('email').not().isEmpty().withMessage(consts.errors.INVALID_EMAIL),
  body('password').not().isEmpty().withMessage(consts.errors.INVALID_PASSWORD),
  require('../../controllers/LoginController.js')
)

// アカウント情報取得API
router.post('/get_account',
  header('authorization').not().isEmpty().withMessage(consts.errors.INVALID_ACCESS_TOKEN),
  require('../../controllers/GetUserController.js')
)

module.exports = router
