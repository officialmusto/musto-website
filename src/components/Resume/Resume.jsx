// assets
import resumeDownload from "../../assets/christian-musto-resume.pdf"
import resumeP1 from "../../assets/christian-musto-resume-1.png"
import resumeP2 from "../../assets/christian-musto-resume-2.png"

// css
import styles from"../Resume/Resume.module.css"

function Resume() {
  return (
    <>
      <section id={styles.resume}>
        <div className={styles.resumeTextLink}>
          <h1 id={styles.resumeText}>Resume Page</h1>
          <a className={styles.downloadLink} href={resumeDownload} download>
            Download
          </a>
        </div>
        <div className={styles.resumepges}>
          <img
            id={styles.resume1}
            src={resumeP1}
            alt="resume page 1"
            style={{
              maxHeight: "550px",
              borderRadius: "9px",
            }}
          />
          <img
            id={styles.resume2}
            src={resumeP2}
            alt="resume page 1"
            style={{
              maxHeight: "550px",
              borderRadius: "9px",
            }}
          />
        </div>
      </section>
    </>
  )
}

export default Resume
