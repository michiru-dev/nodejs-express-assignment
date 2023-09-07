const express = require('express')
const app = express()
const studentsRouter = require('./routes/students')
const instructorsRouter = require('./routes/instructors')
const path = require('path')

//静的ファイルを読み込む
app.use(express.static('/index.html'))

//ejsの準備
app.set('view engine', 'ejs')
//viewsフォルダがルートにない場合はこれが必要
//__dirnameは現在の場所
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.sendFile('/index.html', { root: __dirname })
})

app.use('/students', studentsRouter)

app.use('/instructors', instructorsRouter)

app.listen(3000, () => console.log('server running'))
