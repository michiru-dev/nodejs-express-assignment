const express = require('express')
const router = express.Router()

const instructorsArr = ['henil', 'arthur']

router.use((req, res, next) => {
  console.log(req.originalUrl)
  next()
})

router.get('/', (req, res) => {
  res.render('instructos', { instructorsArr: instructorsArr })
})

router.get('/about', (req, res) => {
  res.render('about', { about: 'Instructors' })
})

module.exports = router
