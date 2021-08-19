require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (err) => console.err(err))
db.once('open', () => console.log('Connected to DB'))

app.use(express.json())

const usersRouter = require('./routes/users')
const tutorsRouter = require('./routes/users')


app.use('/users', usersRouter)
app.use('/tutors', tutorsRouter)


app.listen(3001, () => console.log('server running'))
