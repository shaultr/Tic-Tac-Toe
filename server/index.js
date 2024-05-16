const express = require('express'),
    app = express(),
    { createServer } = require('http'),
    { Server } = require('socket.io'),
    cors = require('cors');

app.use(cors())

const server = createServer(app)
const io = new Server(server, { cors: { origin: '*', methods: '*' } });

const rooms ={

}
console.log(rooms);
app.get('/test', (req, res) => res.send("yesssss"))
function getRandomNumber() {
    let randomNumber = Math.random();
    randomNumber *= 100000000;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
  }

io.on('connection', (socket) => {

    socket.on('create-room', () => {
        const roomNumCreated = getRandomNumber()
        rooms[roomNumCreated] = {
            p1: {
                id: socket.id,

            }
        }
        // console.log(rooms[roomNumCreated]);
        socket.join(roomNumCreated)
        socket.emit('room-status', { roomNumCreated })
    })
    
    socket.on('join-room', (roomNum) => {
        console.log(rooms[roomNum]);
        if(!rooms[roomNum]) {
            return;
        }
        rooms[roomNum] = {
            p2: {
                id: socket.id,
            }
        }
        socket.join(roomNum)
        socket.emit('room-status', { roomNum })
        
    })

    socket.on('player-choice', (choice) => {
        console.log(`Player choice: ${choice}`);
        socket.emit("choose", choice)
    });
    console.log("connected", socket.id);
})

server.listen(3000, () => console.log("The server is running on port 3000"))

