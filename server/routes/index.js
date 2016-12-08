const { Router } = require('express')

const home = require('./home')
const api = require('./api')

const router = Router()

router.use(home)
router.use('/api', api)

module.exports = () => router