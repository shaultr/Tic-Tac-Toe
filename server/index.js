const { log } = require('console');
const { checkWin } = require('./functions')
const express = require('express'),
    app = express(),
    { createServer } = require('http'),
    { Server } = require('socket.io'),
    cors = require('cors');

app.use(cors())

const server = createServer(app)
// const io = new Server(server, { cors: { origin: '*', methods: '*' } });
app.use(cors({
    origin: '*', // אפשר גם להגדיר דומיין ספציפי
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }));
  
  // הוספת הגדרות CORS ל-Socket.io
  const io = new Server(server, {
    cors: {
      origin: '*', // אפשר גם להגדיר דומיין ספציפי
      methods: ['GET', 'POST']
    }
  });
const rooms = {

}
app.get('/test', (req, res) => res.send("yesssss"))
let randomNumber = 0;
let currentPlayer = ''
let board = Array(9).fill('');

const resetGame = () => {
    board = Array(9).fill('');
    currentPlayer = null;
    endGame = false;
    console.log('Game reset: ', board);
  };

function getRandomNumber() {
    randomNumber = Math.random();
    randomNumber *= 1000;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}

io.on('connection', (socket) => {

    socket.on('create-room', () => {
        resetGame();
        const roomNumCreated = getRandomNumber()
        rooms[roomNumCreated] = {
            p1: {
                id: socket.id,

            }
        }
        console.log(rooms[roomNumCreated]);
        socket.join(roomNumCreated)
        socket.emit('room-status', { roomNumCreated })
    })

    socket.on('join-room', (roomNum) => {
        if (!rooms[roomNum] || roomNum != randomNumber) {
            socket.emit('error', { message: 'Room number does not match or does not exist' });
            return;
        }
        rooms[roomNum].p2 = {
            id: socket.id,
        };
        socket.join(roomNum);
        socket.emit('room-status', { roomNum });
        console.log(rooms[roomNum]);

    });

    socket.on('player-choice', (choice) => {
        console.log(`Player choice: ${choice}`);
        socket.emit("choose", choice)
        let choiceP2 = choice;
        let choiceP1 = (choice === 'x') ? 'o' : 'x';
        rooms[randomNumber].p2.choice = choiceP2;
        rooms[randomNumber].p1.choice = choiceP1;
    });

    socket.on('startGame', () => {
        const p1SocketId = rooms[randomNumber]?.p1?.id;
        if (p1SocketId) {
            const message = "Start";
            io.to(p1SocketId).emit('gameStarted', { message });
        } else {
            socket.emit('error', { message: 'Room number or p1 socket ID not found' });
        }
    });
    socket.on('game', () => {
        const choiceP1 = rooms[randomNumber].p1.choice;
        const choiceP2 = rooms[randomNumber].p2.choice;

        const p1SocketId = rooms[randomNumber]?.p1?.id;
        const p2SocketId = rooms[randomNumber]?.p2?.id;

        if (p1SocketId && p2SocketId) {
            io.to(p1SocketId).emit('choose', { choiceP1 });
            io.to(p2SocketId).emit('choose', { choiceP2 });
        }
    });
    socket.on('click', ({ index, player }) => {
        board[index] = player;
        
        const isWin = checkWin(board, player)
        if(!isWin.isWin) {
            currentPlayer = player === 'x' ? 'o' : 'x';
        }
        console.log(isWin);

        const p1SocketId = rooms[randomNumber]?.p1?.id;
        const p2SocketId = rooms[randomNumber]?.p2?.id;

        if (p1SocketId && p2SocketId) {
            io.to(p1SocketId).emit('update-board', { currentPlayer, board, isWin });
            io.to(p2SocketId).emit('update-board', { currentPlayer, board, isWin });
        }

    })

});

server.listen(3000, () => console.log("The server is running on port 3000"))

