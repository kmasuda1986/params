const database = process.env.DB_NAME || 'params'
const username = process.env.DB_USERNAME || 'params_user'
const password = process.env.DB_PASSWORD || 'EncMrnky5tHP'
const host = process.env.DB_MASTER_HOST || 'localhost'
const port = process.env.DB_PORT || '13306'
const dialect = process.env.DB_DIALECT || 'mysql'
const timezone = '+09:00'

module.exports = {
  development: {
    database,
    username,
    password,
    host,
    port,
    dialect,
    timezone,
    define: {
      underscored: true
    }
  },
  test: {
    database,
    username,
    password,
    host,
    port,
    dialect,
    timezone,
    define: {
      underscored: true
    }
  },
  production: {
    database,
    username,
    password,
    host,
    port,
    dialect,
    timezone,
    define: {
      underscored: true
    }
  }
}
