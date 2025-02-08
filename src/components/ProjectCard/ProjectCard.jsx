/* eslint-disable react/prop-types */

// assets
import githubIcon from '../../assets/github-logo.svg'
import deployedIcon from '../../assets/icons/deployed-icon.svg'

// css
import styles from '../ProjectCard/ProjectCard.module.css'

function ProjectCard({ project, cardIdx }) {
  return (
    <div
      style={{
        backgroundImage: `url(${project.thumbnail})`,
        backgroundSize: 'cover',
      }}
      key={cardIdx}
      className={styles.projectCard}
    >
      <section className={styles.nameLinks}>
        <h2 id={styles.title}>{project.title}</h2>
        {project.links.map((link, idx) => {
          return (
            <div key={idx}>
              <div className={styles.projectLink}>
                <div className={styles.githubLink}>
                  <img
                    src={githubIcon}
                    alt="github-icon"
                    style={{ maxHeight: '30px' }}
                  />
                  <a id={styles.githubText} href={link.github}>
                    GitHub
                  </a>
                </div>
                <div className={styles.deployedLink}>
                  <img
                    src={deployedIcon}
                    alt="deployed-icon"
                    style={{ maxHeight: '30px' }}
                  />
                  <a id={styles.deployedText} href={link.deployedSite}>
                    Deployed
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </section>
      <h2 id={styles.desc}>{project.desc}</h2>
      <div className={styles.badges}>
        {project.badges.map((badge, idx) => {
          return (
            <img id={styles.badge} key={idx} src={badge} alt="badge icon" />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectCard
