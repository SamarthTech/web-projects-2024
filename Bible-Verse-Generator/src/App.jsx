import { useState } from 'react'
import './App.css'
import RandomVerse from './components/RandomVerse'
import RetrievalButton from './components/RetrievalButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RandomVerse/>
      </div>
       <div>
       <RetrievalButton/>
       </div>
    </>
  )
}

export default App
