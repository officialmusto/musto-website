// NPM MODULES
import { HashLink } from 'react-router-hash-link'
import { useState, useEffect, useRef } from 'react'

// FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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
      <button className={`menu-button ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>


      {/* Navigation Menu */}
      <div ref={menuRef} id="nav-el" className={menuOpen ? 'expanded' : ''}>
        <nav className="nav">
          <div className="widgets-icon">
            <img src={widgetsIcon} className="widgets-icon" alt="Widgets" />
            <HashLink smooth to="/widgets">
              widgets
            </HashLink>
          </div>
          <div className="docs-icon">
            <img src={docsIcon} className="docs-icon" alt="Docs" />
            <HashLink smooth to="/">
              docs
            </HashLink>
          </div>
          <div className="home-icon">
            <img src={homeIcon} className="home-icon" alt="Home" />
            <HashLink smooth to="/">
              home
            </HashLink>
          </div>
          <div className="comm-icon">
            <img src={commIcon} className="comm-icon" alt="Community" />
            <HashLink smooth to="/">
              community
            </HashLink>
          </div>
          <div className="dono-icon">
            <img src={donoIcon} className="dono-icon" alt="Donations" />
            <HashLink smooth to="/donate">
              donations
            </HashLink>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar
