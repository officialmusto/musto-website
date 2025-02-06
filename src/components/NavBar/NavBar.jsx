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

// Make sure to wrap the button and the drawer in a container.
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
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

  return (
    <div className="menu-container">
      {/* Mobile Menu Button */}
      <button
        ref={menuButtonRef}
        className={`menu-button ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {/* Navigation Drawer */}
      <div ref={menuRef} id="nav-el" className={menuOpen ? 'expanded' : ''}>
        <nav className="nav">
          <div className="nav-item">
            <HashLink smooth to="/widgets">
              <img src={widgetsIcon} className="icon" alt="Widgets" />
              widgets
            </HashLink>
          </div>
          <div className="nav-item">
            <HashLink smooth to="/">
              <img src={docsIcon} className="icon" alt="Docs" />
              docs
            </HashLink>
          </div>
          <div className="nav-item">
            <HashLink smooth to="/">
              <img src={homeIcon} className="icon" alt="Home" />
              home
            </HashLink>
          </div>
          <div className="nav-item">
            <HashLink smooth to="/">
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
    </div>
  )
}

export default NavBar
