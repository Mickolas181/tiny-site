import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'      
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Love from './components/love.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
        <Hero />
        <About />
        <Projects/>
        <Love/>
        
    </div>
  )
}

export default App
