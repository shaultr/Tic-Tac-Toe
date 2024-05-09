import GamePage from './pages/GamePage'
import ChoosePlayerPage from './pages/ChoosePlayerPage'
import { Route, Routes } from "react-router-dom"
import { SocketProvider } from "./socket"

function App() {

  return (
    <>
        <SocketProvider>
        <Routes>
          <Route path="/" element={<ChoosePlayerPage />} />
          <Route path="play" element={<GamePage />} />
        </Routes>
        </SocketProvider>
    </>
  )
}

export default App
