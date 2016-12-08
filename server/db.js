const Sequelize = require('sequelize')

const defaults = {
  database: '',
  user: '',
  password: '',
  host: 'localhost',
  extended: {},
}

const envs = {
  development: {
    database: 'rootflow',
  },
  test: {},
  production: {},
}

let cached

module.exports = (env) => {
  if (cached) return cached

  const E = Object.assign({}, defaults, envs[env])

  return cached = new Sequelize(E.database, E.user, E.password, Object.assign({
    host: E.host,
    dialect: 'postgres',
  }, E.extended))
}