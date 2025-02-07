import React from 'react'

// components
import About from '../../components/About/About'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProjectList from '../../components/ProjectList/ProjectList'
import Resume from '../../components/Resume/Resume'

const Portfolio = () => {
  return (
    <>
      <ProfileCard />
      <About />
      <ProjectList />
      <Resume />
    </>
  )
}

export default Portfolio