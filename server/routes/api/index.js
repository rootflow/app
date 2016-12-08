const { Router } = require('express')
const { json } = require('body-parser')

const router = module.exports = Router()

router.use(json())

router.get('/demo', (req, res) => {
  res.status(201).json({
    demo: true,
    data: {
      a: 1,
      b: '2',
      c: true
    }
  })
})

router.use((err, req, res, next) => {
  if (!err) return next()

  res.status(500).json({
    error: 'bang',
    dump: global.DEVELOPMENT
      ? {
          message: err.message,
          code: err.code,
          statusCode: err.statusCode,
          stack: err.stack
            .split('\n')
            .map(line => line.replace(/\s{2,}/g, '')),
        }
      : undefined,
  })
})

router.all('*', (req, res) => {
  res.status(400).json({
    error: 'bad request',
    description: global.DEVELOPMENT ? `Path '/api${req.path}' not found` : undefined,
  })
})