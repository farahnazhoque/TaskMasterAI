import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='heading1'>Centralize Your Side Projects</h1>
        <p className='para'>
        Manage all your side projects in one intuitive platform, designed to keep you organized and on track with tasks and deadlines.

        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

    </>
  )
}

export default App
