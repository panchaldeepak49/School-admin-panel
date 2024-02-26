import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Path from './routes/Path';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router >
      <Path />
    </Router> 
    </>
  )
}

export default App
