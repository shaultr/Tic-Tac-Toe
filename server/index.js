const express = require('express'),
    app = express(),
    { createServer } = require('http'),
    { Server } = require('socket.io'),
    cors = require('cors');

app.use(cors())

const server = createServer(app)
const io = new Server(server, { cors: { origin: '*', methods: '*' } })

app.get('/test', (req, res) => res.send("yesssss"))

io.on('connection', (socket) => {

    socket.on('room', (roomNum) => {
        socket.join(roomNum)
        socket.emit('room-status')
    })
    console.log("connected", socket.id);
})

server.listen(3000, () => console.log("listening on port 3000"))

