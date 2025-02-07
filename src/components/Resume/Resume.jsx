// assets
import resumeDownload from "../../assets/christian-musto-resume.pdf"
import resumeP1 from "../../assets/christian-musto-resume-1.png"
import resumeP2 from "../../assets/christian-musto-resume-2.png"

// css
import "../Resume/Resume.module.css"

function Resume() {
  return (
    <>
      <section id="resume">
        <div className="resume-text-link">
          <h1 id="resume-text">Resume Page</h1>
          <a className="download-link" href={resumeDownload} download>
            Download
          </a>
        </div>
        <div className="resume-pages">
          <img
            id="resume-1"
            src={resumeP1}
            alt="resume page 1"
            style={{
              maxHeight: "550px",
              borderRadius: "9px",
            }}
          />
          <img
            id="resume-2"
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
