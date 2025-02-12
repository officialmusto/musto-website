import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

// Assets
import homeIcon from '../../assets/icons/home.png'
import downloadsIcon from '../../assets/icons/downloads.png'
import docsIcon from '../../assets/icons/docs.png'
import portIcon from '../../assets/icons/portfolio.png'
import donoIcon from '../../assets/icons/dono.png'

// CSS
import styles from './NavBar.module.css'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650)
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 650)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
    <>
      <button
        ref={menuButtonRef}
        className={`${styles.menuButton} ${menuOpen ? styles.active : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className={styles.menuIcon}
        />
      </button>

      {isMobile ? (
        <div
          ref={menuRef}
          className={`${styles.navMobile} ${menuOpen ? styles.expanded : ''}`}
        >
          <nav className={styles.nav}>
            <div className={styles.navItem}>
              <Link to="/">
                <img src={homeIcon} className={styles.icon} alt="home" />
                home
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/portfolio">
                <img src={portIcon} className={styles.icon} alt="Portfolio" />{' '}
                portfolio
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/downloads">
                <img src={downloadsIcon} className={styles.icon} alt="downloads" />{' '}
                downloads
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/docs">
                <img src={docsIcon} className={styles.icon} alt="Docs" /> 
                docs
              </Link>
            </div>
          </nav>
        </div>
      ) : (
        <div className={styles.navDesktop}>
          <nav className={styles.nav}>
            <div className={styles.navItem}>
              <Link to="/">
                <img src={homeIcon} className={styles.icon} alt="Home" /> 
                home
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/portfolio">
                <img src={portIcon} className={styles.icon} alt="Portfolio" />{' '}
                portfolio
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/downloads">
                <img src={downloadsIcon} className={styles.icon} alt="downloads" />{' '}
                downloads
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/docs">
                <img src={docsIcon} className={styles.icon} alt="Docs" /> 
                docs
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

export default NavBar
