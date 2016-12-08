#!/usr/bin/env node

const Express = require('express')
const { urlencoded } = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const routes = require('./routes')

const PORT = process.env.PORT || 3000
global.DEVELOPMENT = process.env.NODE_ENV !== 'production'

const app = Express()

app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(morgan(DEVELOPMENT ? 'dev' : 'common'))
app.use(routes())

app.listen(PORT, () => {
  console.log(`RootFlow listening port ${PORT}...`)
})