#!/usr/bin/env node

const { resolve } = require('path')
const Express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { urlencoded } = require('body-parser')

const routes = require('./routes')

// constants
const PORT = process.env.PORT || 3000
global.DEVELOPMENT = process.env.NODE_ENV !== 'production'

const app = Express()

// settings
app.set('view engine', 'pug')
app.set('views', resolve(__dirname, 'views'))

// middlewares
app.use(cors())
app.use(urlencoded({ extended: true }))
app.use(morgan(DEVELOPMENT ? 'dev' : 'common'))
app.use(routes())

app.listen(PORT, () => {
  console.log(`RootFlow listening port ${PORT}...`)
})