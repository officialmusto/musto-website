import React from 'react'

// components
import About from '../../components/About/About'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProjectList from '../../components/ProjectList/ProjectList'
import Resume from '../../components/Resume/Resume'

// assets
import styles from './Portfolio.module.css'

const Portfolio = () => {
  return (
    <div className={styles.allEl}>
      <div className={styles.profileAndAbout}>
        <ProfileCard />
        <About />
      </div>
      <div className={styles.projectsAndResume}>
        <ProjectList />
        <Resume />
      </div>
    </div>
  )
}

export default Portfolio