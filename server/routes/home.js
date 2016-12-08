const { Router } = require('express')

const router = module.exports = Router()

router.get('/', (req, res) => {
  res.status(200).send('ok')
})

router.get('/about', (req, res) => {
  res.status(200).send('about')
})