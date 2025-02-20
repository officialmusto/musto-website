import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import styles from './NavBar.module.css'

// Dummy assets – replace these with your actual icon paths
import homeIcon from '../../assets/icons/home.png'
import downloadsIcon from '../../assets/icons/downloads.png'
import docsIcon from '../../assets/icons/docs.png'
import portIcon from '../../assets/icons/portfolio.png'

function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650)
      if (window.innerWidth > 650) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        controls.start({
          borderRadius: '22px',
          top: '10px',
          width: '85%',
          transition: { type: 'spring', stiffness: 150, damping: 7 },
        })
      } else {
        controls.start({
          width: '100%',
          borderRadius: '0px',
          top: '0px',
          left: '0px',
          right: '0px',
          transition: { type: 'spring', stiffness: 150, damping: 7 },
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [controls])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <>
      <motion.div
        className={styles.navDesktop}
        animate={controls}
        initial={{
          borderRadius: '0px',
          top: '0px',
          left: '0px',
          right: '0px',
        }}
      >
        <nav className={styles.nav}>
          {/* Desktop Navigation Items */}
          {!isMobile && (
            <>
              <div className={styles.navItem}>
                <Link to="/">
                  <img src={homeIcon} className={styles.icon} alt="home" />
                  Home
                </Link>
              </div>
              <div className={styles.navItem}>
                <Link to="/portfolio">
                  <img src={portIcon} className={styles.icon} alt="portfolio" />
                  Portfolio
                </Link>
              </div>
              <div className={styles.navItem}>
                <Link to="/downloads">
                  <img
                    src={downloadsIcon}
                    className={styles.icon}
                    alt="downloads"
                  />
                  Downloads
                </Link>
              </div>
              <div className={styles.navItem}>
                <Link to="/docs">
                  <img src={docsIcon} className={styles.icon} alt="docs" />
                  Docs
                </Link>
              </div>
            </>
          )}

          {/* Mobile Hamburger Icon */}
          {isMobile && (
            <div
              className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobile && isMenuOpen && (
        <motion.div
          className={styles.mobileMenu}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/portfolio" onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link to="/downloads" onClick={toggleMenu}>
            Downloads
          </Link>
          <Link to="/docs" onClick={toggleMenu}>
            Docs
          </Link>
        </motion.div>
      )}
    </>
  )
}

export default NavBar