import React from 'react'

/*
===== COMPONENTS =====
*/
import CarouselCard from '../../components/CarouselCard/CarouselCard'

/*
===== ASSETS =====
*/


/*
===== STYLES =====
*/
import styles from './Landing.module.css'


const Landing = () => {

  return (
    <>
    <div className={styles.container}>
      <div className={styles.title}>
        Home Page
      </div>
        <CarouselCard/>
    </div>
    </>
  )
}
export default Landing
