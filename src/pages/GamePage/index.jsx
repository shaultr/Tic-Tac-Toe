import styles from './style.module.css'
import BoardGame from '../../components/BoardGame';
import Header from '../../components/Header';
import CircleImg from '../../components/CircleImg'
import Button from '../../components/Button'
export default function GamePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <div className={styles.plater1}>
            <CircleImg />
          </div>
          <div className={styles.plater1}>
            <CircleImg />
          </div>
        </div>
        <Header />
      </div>
      <div className={styles.boardBox}>
        <BoardGame />
      </div>
      <div className={styles.buttons}>
        <Button text={"back"}/>
      </div>
    </div>
  )
}
