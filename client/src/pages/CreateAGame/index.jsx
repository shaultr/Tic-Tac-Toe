import styles from './style.module.css'
import ContentFrame from '../../components/ContentFrame';
import BackButton from '../../components/BackButton';
import { socket } from "../../socket";
import Button from '../../components/Button'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function createAGame() {
  const navigate = useNavigate();

  const [code, setCode] = useState(0);

  useEffect(() => {
    socket.emit('create-room');
    socket.on('room-status', room => setCode(room?.roomNumCreated));
  }, []);
  socket.on('gameStarted', (data) => {
    console.log(data?.message);
    if(data.message === 'Start'){
      navigate('/play')

    }
});

  const content = <h1 className={styles.code}>{code}</h1>;

  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <BackButton />
      </div>
      <div className={styles.codeContainer}>

        <h3 >your code </h3>
        <ContentFrame content={content} />
      </div>

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
        <div className={styles.circle}>

        </div>
        <div className={styles.circle}>

        </div>
        <div className={styles.circle}>

        </div>
      </div>
      <h1 className={styles.title}>waiting for opponnent </h1>


    </div>
  )
}
