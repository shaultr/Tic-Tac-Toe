import GamePage from './pages/GamePage'
import ChoosePlayerPage from './pages/ChoosePlayerPage'
import JoineToAGame from './pages/JoineToAGame'
import { Route, Routes } from "react-router-dom"
import { SocketProvider, socket } from "./socket"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    socket.emit('create-room');
    console.log('socket');
  }, []);

  return (
    <>
      {/* <SocketProvider> */}
        <Routes>
          <Route path="/" element={<JoineToAGame />} />
          <Route path="/choosePlayer" element={<ChoosePlayerPage />} />
          <Route path="play" element={<GamePage />} />
        </Routes>
      {/* </SocketProvider> */}
    </>
  )
}

export default App
