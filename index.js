const express = require('express')
const userRouter = require('./routes/user.routes')
const objectRouter = require('./routes/object.routes')
const publicationsRouter = require('./routes/publications.routes')

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080

const app = express()

app.use(bodyParser.json({limit: '500mb'}))
app.use('/api',userRouter)
app.use('/api',objectRouter)
app.use('/api',publicationsRouter)


app.listen(PORT, () => console.log(`Сервер запущен с портом: ${PORT}`))


