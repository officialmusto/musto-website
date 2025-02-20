/*
===== MODULES =====
*/
import React, { useState } from 'react'


/*
===== ASSETS =====
*/
import favicon0 from '../../assets/favicon/favicon1.png'
import favicon1 from '../../assets/favicon/favicon2.png'
import favicon2 from '../../assets/favicon/favicon3.png'

/*
===== STYLES =====
*/
import styles from './CarouselCard.module.css'

const CarouselCard = () => {
  

  const [index, setIndex] = useState(0)

  // array of image objects containing img key with value of favicon variable.
  const slides = [
    { img: favicon0 },
    { img: favicon1 },
    { img: favicon2 },
]

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className={styles.carousel}>
      <a className={styles.carouselImg} href={slides[index].url} target="_blank" rel="noopener noreferrer">
        <img src={slides[index].img} alt={`Slide ${index + 1}`} className={styles.image} />
      </a>
      <div className={styles.buttonContainer}>
        <button className={styles.carouselButtons} onClick={handlePrevious}>Previous</button>
        <button className={styles.carouselButtons} onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default CarouselCard