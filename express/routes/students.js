const express = require('express')
const router = express.Router()

const studentsArr = ['michiru', 'soma', 'hokori']

router.use((req, res, next) => {
  console.log(req.originalUrl)
  next()
})

router.get('/', (req, res) => {
  res.render('students', { studentsArr: studentsArr })
})

router.get('/about', (req, res) => {
  res.render('about', { about: 'Students' })
})

module.exports = router
