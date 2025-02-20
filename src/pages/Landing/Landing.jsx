import React from 'react'

/*
===== COMPONENTS =====
*/
import CarouselCard from '../../components/CarouselCard/CarouselCard'
import Footer from '../../components/Footer/Footer'

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
        Musto's Website
      </div>
        <CarouselCard />
        <Footer />
    </div>
    </>
  )
}
export default Landing
