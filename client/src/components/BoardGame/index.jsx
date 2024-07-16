import styles from './style.module.scss'
import Square from '../Square';
import { useState, useEffect } from 'react';
import { socket } from "../../socket";

export default function BoardGame({ player, setPlayer }) {
    const [winner, setWinner] = useState('');
    const [endGame, setEndGame] = useState(false);
    const [locations, setLocations] = useState([]);
    let counter = 0;
    const [board, setBoard] = useState(Array(9).fill(''));
    let color = !winner ? "rgba(201, 249, 252, 1)" : "rgba(209, 209, 209, 1)";

    // useEffect(() => {
    //     socket.on('update-board', (data ) => {
    //       setPlayer(data?.player);
    //     });
    //     return () => {
    //       socket.off('update-board');
    //     };
    //   }, []);

    const checkWin = (newBoard) => {

        const optionsWin = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2],
        ]
        for (let i = 0; i < optionsWin.length; i++) {
            const [a, b, c] = optionsWin[i];
            if (newBoard[a] === player && newBoard[b] === player && newBoard[c] === player) {
                setWinner(player)
                setEndGame(true)
                console.log(player);
                setLocations([a, b, c]);
            }
        }

    }
    const handleClick = (index) => {
        if (board[index] === '' && endGame === false) {
            socket.emit('click', { index, player });
            socket.on('update-board', (data) => {
                setPlayer(data.currentPlayer)
                console.log(data.currentPlayer);
            });

            const newBoard = [...board];
            newBoard[index] = player;
            setBoard(newBoard)
            checkWin(newBoard);
            if (counter === board.length) {
                setEndGame(true)
            }
        }
    }
    return (
        <div className={styles.container}>
            {
                board.map((item, index) => {
                    let mode = 'empty';
                    if (board[index] === 'x') mode = 'x'
                    if (board[index] === 'o') mode = 'o'
                    if (winner) mode = 'endGame'
                    if (board[index] === 'x' && winner === 'x' && locations.includes(index)) mode = 'x'
                    if (board[index] === 'x' && winner === 'x' && !locations.includes(index)) mode = 'endGameX'
                    if (board[index] === 'o' && winner === 'x' && !locations.includes(index)) mode = 'endGameO'

                    if (board[index] === 'o' && winner === 'o' && locations.includes(index)) mode = 'o'
                    if (board[index] === 'o' && winner === 'o' && !locations.includes(index)) mode = 'endGameO'
                    if (board[index] === 'x' && winner === 'o' && !locations.includes(index)) mode = 'endGameX'

                    return <Square key={index} index={index} mode={mode} click={handleClick} />
                })
            }
        </div>
    )
}
