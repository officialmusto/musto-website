// npm imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// components
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import ProfileCard from './components/ProfileCard/ProfileCard'
import ProjectList from './components/ProjectList/ProjectList'
import Resume from './components/Resume/Resume'

import Landing from './pages/Landing/Landing'
import Docs from './pages/Docs/Docs'
import Portfolio from './pages/Portfolio/Portfolio'
import MyProducts from './pages/MyProducts/MyProducts'
import Donations from './pages/Donations/Donations'

// css
import './App.css'

// assets


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/widgets" element={<MyProducts />} />
        <Route path="/donate" element={<Donations />} />
      </Routes>
    </>
  )
}
export default App
