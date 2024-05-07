import styles from './style.module.css'
import BoardGame from '../../components/BoardGame';
import Header from '../../components/Header';
import CircleImg from '../../components/CircleImg'
import Button from '../../components/Button'
import { useState } from 'react';

export default function GamePage() {
  const [player, setPlayer] = useState('x');
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <div className={styles.plater1}>
            <CircleImg player={player} choosePlayer={'x'}/>
          </div>
          <div className={styles.plater1}>
            <CircleImg  player={player} choosePlayer={'o'}/>
          </div>
        </div>
        <Header />
      </div>
      <div className={styles.boardBox}>
        <BoardGame player={player} setPlayer={setPlayer} />
      </div>
      <div className={styles.buttons}>
        <Button text={"back"}/>
      </div>
    </div>
  )
}
