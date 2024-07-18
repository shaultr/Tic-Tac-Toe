import styles from './style.module.css'
import BoardGame from '../../components/BoardGame';
import Header from '../../components/Header';
import CircleImg from '../../components/CircleImg'
import Button from '../../components/Button'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { socket } from "../../socket";

export default function GamePage() {
  const [player, setPlayer] = useState('');
  const [localPlayer , setLocalPlayer]  = useState('');
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');

  useEffect(() => {
    socket.on('choose', (data) => {
      if(data.choiceP1){
        setLocalPlayer(data.choiceP1)
        setPlayer(data.choiceP1)
        if(data.choiceP1 === 'x'){
          setP1('x');
          setP2('o');
        }
        else{
          setP1('o');
          setP2('x');
          
        }
        
      }
      if(data.choiceP2){
        setLocalPlayer(data.choiceP2)
        setPlayer(data.choiceP2)
        if(data.choiceP2 === 'x'){
          setP2('x');
          setP1('o');
        }
        else{
          setP2('o');
          setP1('x');
        }
      }

    });
    socket.emit('game');
    return () => {
      socket.off('choose');
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <div className={styles.plater1}>
            <CircleImg player={player} choosePlayer={p1} />
          </div>
          <div className={styles.plater1}>
            <CircleImg player={player} choosePlayer={p2} />
          </div>
        </div>
        <Header />
      </div>
      <div className={styles.boardBox}>
        <BoardGame localPlayer={localPlayer} player={player} setPlayer={setPlayer} />
      </div>
      <div className={styles.buttons}>
        <NavLink to={'/'}>
          <Button text={"back"} />
        </NavLink>
      </div>
    </div>
  )
}
