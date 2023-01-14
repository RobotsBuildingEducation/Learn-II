import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Patreon from './Patreon/Patreon'
import ChatGPT from './ChatGPT/ChatGPT'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>

        <Patreon />
        <ChatGPT />
      </div>
    </div>
  )
}

export default App
