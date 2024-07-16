import GamePage from './pages/GamePage'
import ChoosePlayerPage from './pages/ChoosePlayerPage'
import CreateAGame from './pages/CreateAGame'
import JoineToAGame from './pages/JoineToAGame'
import { Route, Routes } from "react-router-dom"
import { SocketProvider, socket } from "./socket"
import { useEffect } from "react"

function App() {


  return (
    <>
      <SocketProvider>
        <Routes>
          <Route path="/" element={<JoineToAGame />} />
          <Route path="/CreateAGame" element={<CreateAGame />} />
          <Route path="/choosePlayer" element={<ChoosePlayerPage />} />
          <Route path="play" element={<GamePage />} />
        </Routes>
      </SocketProvider>
    </>
  )
}

export default App
