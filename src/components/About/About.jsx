// css
import "./About.css"

function About() {
  return (
    <div id="about-content">
    <div className="about-box">
        <section id="about">
          <h1 id="about-title">About Me</h1>
          <p id="about-text">
            Welcome! I'm Christian Musto, a certified Software Engineer based in
            Cleveland, Ohio. With a proven track record in customer service, I
            seamlessly transitioned into the world of software development, driven
            by my unwavering passion for creating exceptional user experiences. My
            unique blend of technical expertise and creative pursuits, including
            photography, producing music, and creating content for a small
            community sets me apart from the rest. As you explore my portfolio,
            you'll discover a versatile professional who brings a fresh
            perspective and a commitment to excellence. I invite you to connect
            with me and explore how our collaboration can elevate your software
            development projects to new heights.
          </p>
          <div className="connect-link-div">
            <a id="connect-link"
            href="mailto: christianmustoj@gmail.com">Let's Connect
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
