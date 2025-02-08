// css
import styles from '../ProfileCard/ProfileCard.module.css'

// assets
import profilePicture from '../../assets/profile-picture.png'
import githubLogo from '../../assets/github-logo.svg'
import emailLogo from '../../assets/email-logo.svg'
import linkedinLogo from '../../assets//linkedin-logo.svg'

function ProfileCard() {
  return (
    <>
      <div id={styles.home}>
        <div className={styles.nameTextStatement}>
          <h1 id={styles.nameText}>Christian Musto</h1>
          <h2 id={styles.brandStatement}>Full stack software developer</h2>
        </div>
        <img
          className={styles.profilePicture}
          src={profilePicture}
          alt="profile picture"
        />
        <div className={styles.links}>
          <div id={styles.emailLink}>
            <img src={emailLogo} alt="email logo" style={{ height: '23px' }} />
            <a href="mailto: christianmustoj@gmail.com">
              christianmustoj@gmail.com
            </a>
          </div>
          <div id={styles.githubLink}>
            <img
              src={githubLogo}
              alt="github logo"
              style={{ height: '20px' }}
            />
            <a href="https://github.com/officialmusto">GitHub</a>
          </div>
          <div id={styles.linkedInLink}>
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
