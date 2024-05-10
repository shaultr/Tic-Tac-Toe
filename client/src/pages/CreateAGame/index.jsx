import styles from './style.module.css'
import ContentFrame from '../../components/ContentFrame';
import BackButton from '../../components/BackButton';
import { socket } from "../../socket";
import Button from '../../components/Button'
import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
export default function createAGame() {
  const [code, setCode] = useState(0);

  function getRandomNumber() {
    let randomNumber = Math.random();
    randomNumber *= 100000000;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
  }
  useEffect(() => {
    const code = getRandomNumber()
    setCode(code);
  }, []);

  const content = <h1 className={styles.code}>{code}</h1>;

  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <BackButton />
      </div>
      <div className={styles.boardBox}>
      <h3 className={styles.title}>your code </h3>
        <ContentFrame content={content} />

        <div className={styles.circleContainer}>
        <div className={styles.circle}>
        </div>
        <div className={styles.circle}>
        </div>
        <div className={styles.circle}>
        </div>
        <div className={styles.circle}>
        </div>
        <div className={styles.circle}>
        </div>
        <div className={styles.circle}>
        </div>
        <div className={styles.circle}>
        </div>
        </div>

        <div className={styles.title}>
          <h1>waiting for opponnent </h1>
        </div>
      </div>
  

    </div>
  )
}
