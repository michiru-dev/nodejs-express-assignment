// let http = require('http')
import * as http from 'http'
// let translate = require('translate')
import translate from 'translate'
translate.engine = 'deepl'
translate.key = '19360f4b-8d05-b52c-dc46-b668829bd9bb:fx'
import { MyDog } from './myModule.js'
import fs from 'fs'

const server = http.createServer(async (req, res) => {
  // res.writeHead(200, { 'Content-Type': 'application/json' })
  // const translatedText = await translate('hi, there!', 'ja')
  // res.write(translatedText)
  // res.write(MyDog())

  if (req.url === '/dog') {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    fs.readFile('./dogs.json', (err, data) => {
      console.log(data)
      if (err) {
        console.log(err)
        res.end()
      }
      res.write(data)
      res.end()
    })
  }

  // res.end()
})

server.listen(8080, () => {
  console.log('server 8080 running')
})
