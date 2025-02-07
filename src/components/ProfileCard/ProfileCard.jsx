// css
import '../ProfileCard/ProfileCard.module.css'

// assets
import profilePicture from '../../assets/profile-picture.png'
import githubLogo from '../../assets/github-logo.svg'
import emailLogo from '../../assets/email-logo.svg'
import linkedinLogo from '../../assets//linkedin-logo.svg'

function ProfileCard() {
  return (
    <>
      <div id="home">
        <div className="name-text-statement">
          <h1 id="name-text">Christian Musto</h1>
          <h2 id="brand-statement">Full stack software developer</h2>
        </div>
        <img
          className="profile-picture"
          src={profilePicture}
          alt="profile picture"
        />
        <div className="links">
          <div id="email-link">
            <img src={emailLogo} alt="email logo" style={{ height: '23px' }} />
            <a href="mailto: christianmustoj@gmail.com">
              christianmustoj@gmail.com
            </a>
          </div>
          <div id="github-link">
            <img
              src={githubLogo}
              alt="github logo"
              style={{ height: '20px' }}
            />
            <a href="https://github.com/officialmusto">GitHub</a>
          </div>
          <div id="linkedin-link">
            <img
              src={linkedinLogo}
              alt="linkedin logo"
              style={{ height: '20px' }}
            />
            <a href="https://www.linkedin.com/in/christian-musto/">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
