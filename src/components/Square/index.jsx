import styles from './style.module.scss';

export default function Square({index, click, board}) {

  
  return (
    <div>
      <div className={styles.container} onClick={()=>click(index)}>
        {board[index] === 'x' && <img src='x.svg' width="70px" /> }
        {board[index] === 'o' && <img src='o.svg' width="70px" /> }
      </div>
    </div>
  )
}
