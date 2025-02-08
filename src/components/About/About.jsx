// css
import styles from './About.module.css'

function About() {
  return (
    <div id={styles.aboutContent}>
      <div className={styles.aboutBox}>
        <section id={styles.about}>
          <h1 id={styles.aboutTitle}>About Me</h1>
          <p id={styles.aboutText}>
            I’m a software engineer, musician, and content creator based in
            Cleveland, Ohio. I have a strong background in customer service but
            found my real passion in software development—especially building
            cool tools that improve live streaming and user experiences. Whether
            I’m coding interactive widgets, producing music, or creating content
            for my YouTube channel Mustology, I’m always finding new ways to
            blend creativity with technology. Check out my work, and let’s build
            something awesome together!
          </p>
          <div className={styles.connectLinkDiv}>
            <a id={styles.connectLink} href="mailto: christianmustoj@gmail.com">
              Let's Connect
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
