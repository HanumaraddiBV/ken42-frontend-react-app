import { useState } from 'react'

import './App.css'
import { TimeTable } from './Pages/TimeTable'
import { Navbar } from './components/Navbar';
import { RouterComponent } from './Routes/Routes';
import { Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <RouterComponent/>
     
    </div>
  )
}

export default App
