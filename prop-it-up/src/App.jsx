import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './assets/components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User></User>
    </>
  )
}

export default App
