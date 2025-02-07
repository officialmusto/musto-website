import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Assets
import homeIcon from '../../assets/icons/home.png'
import widgetsIcon from '../../assets/icons/switch.png'
import docsIcon from '../../assets/icons/docs.png'
import commIcon from '../../assets/icons/community.png'
import donoIcon from '../../assets/icons/dono.png'

// CSS
import '../NavBar/NavBar.css'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <button
        ref={menuButtonRef}
        className={`menu-button ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <motion.div
        ref={menuRef}
        id="nav-el"
        className={`${menuOpen ? 'expanded' : ''} ${
          isScrolled ? 'detached' : 'attached'
        }`}
        initial={{ y: 0 }}
        animate={{ 
          y: isScrolled ? 20 : 0,
          borderRadius: isScrolled ? 32 : 0,
          width: isScrolled ? "95%" : "100%",
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        
      >
        <nav className="nav">
          <div className="nav-item">
            <Link to="/widgets">
              <img src={widgetsIcon} className="icon" alt="Widgets" /> widgets
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/docs">
              <img src={docsIcon} className="icon" alt="Docs" /> docs
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/">
              <img src={homeIcon} className="icon" alt="Home" /> home
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/community">
              <img src={commIcon} className="icon" alt="Community" /> community
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/donate">
              <img src={donoIcon} className="icon" alt="Donations" /> donations
            </Link>
          </div>
        </nav>
      </motion.div>
    </>
  )
}

export default NavBar
