// NPM MODULES
import { HashLink } from 'react-router-hash-link'
import { useState, useEffect, useRef } from 'react'

// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons' // X icon added

// ASSETS
import homeIcon from '../../assets/icons/home.png'
import widgetsIcon from '../../assets/icons/switch.png'
import docsIcon from '../../assets/icons/docs.png'
import commIcon from '../../assets/icons/community.png'
import donoIcon from '../../assets/icons/dono.png'

// CSS
import '../NavBar/NavBar.css'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null) // Reference for the menu
  const menuButtonRef = useRef(null) // Reference for the button

  useEffect(() => {
    function handleClickOutside(event) {
      // If the click is NOT on the menu or button, close the menu
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

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        ref={menuButtonRef}
        className={`menu-button ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />{' '}
      </button>

      {/* Navigation Menu */}
      <div ref={menuRef} id="nav-el" className={menuOpen ? 'expanded' : ''}>
        <nav className="nav">
          <div className="nav-item">
            <HashLink smooth to="/widgets">
            <img src={widgetsIcon} className="icon" alt="Widgets" />
              widgets
            </HashLink>
          </div>
          <div className="nav-item">
            <HashLink smooth to="/docs">
            <img src={docsIcon} className="icon" alt="Docs" />
              docs
            </HashLink>
          </div>
          <div className="nav-item">
            <HashLink smooth to="/home">
            <img src={homeIcon} className="icon" alt="Home" />
              home
            </HashLink>
          </div>
          <div className="nav-item">
            <HashLink smooth to="/community">
            <img src={commIcon} className="icon" alt="Community" />
              community
            </HashLink>
          </div>
          <div className="nav-item">
            <HashLink smooth to="/donate">
            <img src={donoIcon} className="icon" alt="Donations" />
              donations
            </HashLink>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar
