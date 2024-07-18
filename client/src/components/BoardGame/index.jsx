import styles from './style.module.scss'
import Square from '../Square';
import { useState, useEffect } from 'react';
import { socket } from "../../socket";

export default function BoardGame({ localPlayer, player, setPlayer }) {
    const [winner, setWinner] = useState('');
    const [endGame, setEndGame] = useState(false);
    const [locations, setLocations] = useState([]);
    const [board, setBoard] = useState(Array(9).fill(''));
    let color = !winner ? "rgba(201, 249, 252, 1)" : "rgba(209, 209, 209, 1)";

    useEffect(() => {
        socket.on('update-board', ({ currentPlayer, board, isWin }) => {
            setBoard(board);
            if (isWin.isWin) {
                setEndGame(true)
                setWinner(currentPlayer);
                console.log(currentPlayer);
                setLocations(isWin.locations)
            }
            setPlayer(currentPlayer)
        });
        return () => {
            socket.off('update-board');
        };
    }, []);

    const handleClick = (index) => {
        if (board[index] === '' && localPlayer === player && endGame === false) {
            socket.emit('click', { index, player });
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
