import styles from './style.module.css'
import ContentFrame from '../../components/ContentFrame';

import Button from '../../components/Button'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function JoineToAGame() {

  function getMyDiv() {
    const myDiv = <input placeholder="fff" style={{ border: "none" }} />;
    return myDiv;
  }
  const content = getMyDiv();

  return (
    <div className={styles.container}>
      {/* <Back /> */}
      <div className={styles.title}>
        <h1>Join To A Game</h1>
      </div>
      <div className={styles.boardBox}>
        <ContentFrame content={content} />
      </div>
      <div className={styles.buttons}>
        <NavLink to={'/coose'}>
          <Button text={"join"} />
        </NavLink>
      </div>
        <div className={styles.or}>
          <div className={styles.line}></div>
          <div className={styles.p}>
          <p>OR</p>
          </div>
          <div className={styles.line}></div>
        </div>

      <div className={styles.buttons}>
        <NavLink to={'/choose'}>
          <Button text={"create a game"} />
        </NavLink>
      </div>
    </div>
  )
}
