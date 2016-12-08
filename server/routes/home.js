const { Router } = require('express')

const router = module.exports = Router()

router.get('/', (req, res) => {
  res.render('home/index')
})

router.get('/about', (req, res) => {
  res.render('home/about')
})