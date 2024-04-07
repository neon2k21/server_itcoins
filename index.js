const express = require('express')
const userRouter = require('./routes/user.router')
const itemsRouter = require('./routes/items.router')
const groupRouter = require('./routes/group.router')
const cubeRouter = require('./routes/cube.router')

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080

const app = express()

app.use(bodyParser.json({limit: '500mb'}))
app.use('/api',userRouter)
app.use('/api', itemsRouter)
app.use('/api', groupRouter)
app.use('/api', cubeRouter)


var admin = require("firebase-admin");

var serviceAccount = require("./vuzappcursovaya-firebase-adminsdk-e8ymi-717a6727ea.json");

admin.initializeApp({credential: admin.credential.cert(serviceAccount)});



app.listen(PORT, () => console.log(`Сервер запущен с портом: ${PORT}`))


