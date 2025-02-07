/* eslint-disable react/prop-types */

// assets
import githubIcon from '../../assets/github-logo.svg'
import deployedIcon from '../../assets/icons/deployed-icon.svg'

// css
import '../ProjectCard/ProjectCard.module.css'

function ProjectCard({ project, cardIdx }) {
  return (
    <div
      style={{
        backgroundImage: `url(${project.thumbnail})`,
        backgroundSize: 'cover',
      }}
      key={cardIdx}
      className="project-card"
    >
      <section className="name-links">
        <h2 id="title">{project.title}</h2>
        {project.links.map((link, idx) => {
          return (
            <div key={idx}>
              <div className="project-links">
                <div className="github-link">
                  <img
                    src={githubIcon}
                    alt="github-icon"
                    style={{ maxHeight: '30px' }}
                  />
                  <a id="github-text" href={link.github}>
                    GitHub
                  </a>
                </div>
                <div className="deployed-link">
                  <img
                    src={deployedIcon}
                    alt="deployed-icon"
                    style={{ maxHeight: '30px' }}
                  />
                  <a id="deployed-text" href={link.deployedSite}>
                    Deployed
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </section>
      <h2 id="desc">{project.desc}</h2>
      <div className="badges">
        {project.badges.map((badge, idx) => {
          return <img id="badge" key={idx} src={badge} alt="badge icon" />
        })}
      </div>
    </div>
)}

export default ProjectCard
