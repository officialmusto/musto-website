import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

// Assets
import homeIcon from '../../assets/icons/home.png'
import widgetsIcon from '../../assets/icons/switch.png'
import docsIcon from '../../assets/icons/docs.png'
import portIcon from '../../assets/icons/portfolio.png'
import donoIcon from '../../assets/icons/dono.png'

// CSS
import styles from './NavBar.module.css'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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
        className={`${styles.menuButton} ${menuOpen ? styles.active : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars} // Toggle icon
          className={styles.menuIcon}
        />
      </button>

      {isMobile ? (
        <motion.div
          ref={menuRef}
          id={styles.navEl}
          className={`${menuOpen ? styles.expanded : ''}`}
          initial={{ x: 350 }}
          animate={{
            x: menuOpen ? '45%' : '45%',
            y: menuOpen ? '68%' : '68%',
            width: menuOpen ? 200 : 200,
            height: menuOpen ? 350 : 350,
            borderRadius: 20, 
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 5 }}
        >
          <nav className={styles.nav}>
            <div className={styles.navItem}>
              <Link to="/widgets">
                <img src={widgetsIcon} className={styles.icon} alt="Widgets" /> widgets
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/docs">
                <img src={docsIcon} className={styles.icon} alt="Docs" /> docs
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/">
                <img src={homeIcon} className={styles.icon} alt="Home" /> home
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/community">
                <img src={commIcon} className={styles.icon} alt="Community" /> community
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/donate">
                <img src={donoIcon} className={styles.icon} alt="Donations" /> donations
              </Link>
            </div>
          </nav>
        </motion.div>
      ) : (
        <motion.div
          id={styles.navEl}
          className={`${isScrolled ? styles.detached : styles.attached}`}
          initial={{ y: 0 }}
          animate={{
            y: isScrolled ? 25 : 0,
            borderRadius: isScrolled ? 32 : 0,
            width: isScrolled ? '95%' : '100%',
            height: isScrolled ? 130 : 170,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 5 }}
        >
          <nav className={styles.nav}>
            <div className={styles.navItem}>
              <Link to="/widgets">
                <img src={widgetsIcon} className={styles.icon} alt="Widgets" /> widgets
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/docs">
                <img src={docsIcon} className={styles.icon} alt="Docs" /> docs
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/">
                <img src={homeIcon} className={styles.icon} alt="Home" /> home
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/portfolio">
                <img src={portIcon} className={styles.icon} alt="Portfolio" /> portfolio
              </Link>
            </div>
            <div className={styles.navItem}>
              <Link to="/donate">
                <img src={donoIcon} className={styles.icon} alt="Donations" /> donations
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  )
}

export default NavBar
