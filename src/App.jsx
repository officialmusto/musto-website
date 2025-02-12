// npm imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import NavBar from './components/NavBar/NavBar'

// pages
import Landing from './pages/Landing/Landing'
import Docs from './pages/Docs/Docs'
import Portfolio from './pages/Portfolio/Portfolio'
import Projects from './pages/Projects/Projects'
import Donations from './pages/Donations/Donations'

// css
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/downloads" element={<Projects />} />
        <Route path="/donate" element={<Donations />} />
      </Routes>
    </>
  )
}
export default App
