require('dotenv').config()
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const mongoose = require('mongoose')
const http = require("http")
const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: [ "GET", "POST" ]
	}
})

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', (err) => console.err(err))
db.once('open', () => console.log('Connected to DB'))

app.use(logger('dev'));
app.use(express.json())

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

const usersRouter = require('./routes/users')
const tutorsRouter = require('./routes/users')
const mentorsRouter = require('./routes/mentors')


app.use('/users', usersRouter)
app.use('/tutors', tutorsRouter)
app.use('/mentors', mentorsRouter)

io.on("connection", (socket) => {
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
