import styles from './style.module.scss';

export default function Square({ winner, locations, index, click, board }) {

  const squareWin = locations.includes(index)
  const thisColor = squareWin ? "rgba(201, 249, 252, 1)" : winner ? "rgba(209, 209, 209, 1)" : "rgba(201, 249, 252, 1)"
  return (
    <div>
      <div className={styles.container} style={{ backgroundColor: thisColor }} onClick={() => click(index)}>
        {board[index] === 'x' && !winner && <img src='x.svg' width="70px" />}
        {board[index] === 'o' && !winner && <img src='o.svg' width="70px" />}

        {/* if x is winner */}
        {board[index] === 'x' && winner === 'x' && locations.includes(index) && <img src='x.svg' width="70px" />}
        {board[index] === 'x' && winner === 'x' && !locations.includes(index) && <img src='x-gray.svg' width="70px" />}
        {board[index] === 'o' && winner === 'x' && <img src='o-gray.svg' width="70px" />}

        {/* if o is winner */}
        {board[index] === 'o' && winner === 'o' && locations.includes(index) && <img src='o.svg' width="70px" />}
        {board[index] === 'o' && winner === 'o' && !locations.includes(index) && <img src='o-gray.svg' width="70px" />}
        {board[index] === 'x' && winner === 'o' && <img src='x-gray.svg' width="70px" />}




      </div>
    </div>
  )
}
