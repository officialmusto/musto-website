import { useState, useEffect } from 'react'

/*
===== ASSETS =====
*/
import carouselImg0 from '../../assets/habit-hero-screenshot.png'
import carouselImg1 from '../../assets/smash-reviews-screenshot.png'
import carouselImg2 from '../../assets/blackjack-screenshot.png'

/*
===== STYLES =====
*/
import styles from './CarouselCard.module.css'

const CarouselCard = () => {
  const [index, setIndex] = useState(0)

  // Array of images and corresponding website links
  const slides = [
    { img: carouselImg0, link: 'https://habit-hero-musto.netlify.app/' },
    { img: carouselImg1, link: 'https://smash-reviews.fly.dev/' },
    { img: carouselImg2, link: 'https://blackjack-musto.netlify.app/' },
  ]

  useEffect(() => {
    console.log(`Current index: ${index}`)
    console.log(`Transform style: translateX(-${index * (100 / slides.length)}%)`)
  }, [index])

  const handlePrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (i) => {
    console.log(`Going to slide: ${i}`)
    setIndex(i)
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${index * (100 / slides.length)}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, i) => (
            <a key={i} href={slide.link}>
              <img
                src={slide.img}
                alt={`Slide ${i + 1}`}
                className={styles.carouselImg}
              />
            </a>
          ))}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.carouselButtons} onClick={handlePrevious}>
          Previous
        </button>
        <button className={styles.carouselButtons} onClick={handleNext}>
          Next
        </button>
      </div>
      <div className={styles.dotsContainer}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${index === i ? styles.activeDot : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  )
}

export default CarouselCard