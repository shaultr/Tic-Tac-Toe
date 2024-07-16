import styles from './style.module.css'
import { NavLink } from 'react-router-dom';
import ChoosePlayerBox from '../../components/ChoosePlayerBox'
import Button from '../../components/Button'
import { useState } from 'react';
import useSocket from "../../socket";
import { socket } from "../../socket";

export default function GamePage() {
const socket = useSocket()
  const [chooseX, setChooseX] = useState('x')
  const [chooseO, setChooseO] = useState('o')

  const handleClickX = () => {
    setChooseX('chooseX')
    setChooseO('!chooseO')
    socket.emit('player-choice','x')

    socket.on("choose",data=>console.log(data))
  }
  const handleClickO = () => {
    setChooseO('chooseO')
    setChooseX('!chooseX')
    socket.emit('player-choice','o')
  }
const startGame = ()=>{
  console.log("ooooo");
  socket.emit('startGame')
}
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>chhose player </h1>
      </div>

      <ChoosePlayerBox chooseX={chooseX} chooseO={chooseO} handleClickX={handleClickX} handleClickO={handleClickO} />
      <div className={styles.buttons}>
        {(chooseX == 'chooseX' || chooseO == 'chooseO') &&
          <NavLink to ='/play' onClick={startGame}>
            <Button text={"let's play"} />
          </NavLink>
        }
      </div>
    </div>
  )
}
