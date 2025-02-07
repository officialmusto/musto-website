// css
import './About.module.css'

function About() {
  return (
    <div id="about-content">
      <div className="about-box">
        <section id="about">
          <h1 id="about-title">About Me</h1>
          <p id="about-text">
            I’m a software engineer, musician, and content creator based in
            Cleveland, Ohio. I have a strong background in customer service but
            found my real passion in software development—especially building
            cool tools that improve live streaming and user experiences. Whether
            I’m coding interactive widgets, producing music, or creating content
            for my YouTube channel Mustology, I’m always finding new ways to
            blend creativity with technology. Check out my work, and let’s build
            something awesome together!
          </p>
          <div className="connect-link-div">
            <a id="connect-link" href="mailto: christianmustoj@gmail.com">
              Let's Connect
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
