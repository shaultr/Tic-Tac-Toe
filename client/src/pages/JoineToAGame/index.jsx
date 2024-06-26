import styles from './style.module.css'
import ContentFrame from '../../components/ContentFrame';
import BackButton from '../../components/BackButton';
import { socket } from "../../socket";
import Button from '../../components/Button'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function JoineToAGame() {
  const [code, setCode] = useState(null);
  const [roomNun, setRoomNun] = useState(0);
  const navigate = useNavigate();
  function getContent() {
    const myDiv = <input onChange={(e) => setCode(e.target.value)} placeholder="enter code game" style={{ border: "none" }} />;
    return myDiv;
  }
  const content = getContent();

  const join = () => {
    socket.emit('join-room', code);
    socket.on('room-status', room=>room.roomNum && console.log(room.roomNum));
    // console.log(code);
    // code && navigate('/choosePlayer');
  }

  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <BackButton />
      </div>
      <div className={styles.title}>
        <h1>Join To A Game</h1>
      </div>
      <div className={styles.boardBox}>
        <ContentFrame content={content} />
      </div>
      <div className={styles.buttons}>
        <div onClick={join}>
        <Button text={"join"} />
        </div>
      </div>
      <div className={styles.or}>
        <div className={styles.line}></div>
        <div className={styles.p}>
          <p>OR</p>
        </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.buttons}>
        <NavLink to={'/'}>
          <Button text={"create a game"} />
        </NavLink>
      </div>
    </div>
  )
}
