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

    socket.on('create-room', () => {
        // const roomNum = '1234'
        // socket.join(roomNum)
        // socket.emit('room-status', { roomNum })
        console.log("hhhhhh");
    })
    socket.on('join-room', (roomNum) => {
        socket.join(roomNum)
        socket.emit('room-status')
    })
    socket.on('player-choice', (choice) => {
        console.log(`Player choice: ${choice}`);
        socket.emit(choice)
    });
    console.log("connected", socket.id);
})

server.listen(3000, () => console.log("The server is running on port 3000"))

