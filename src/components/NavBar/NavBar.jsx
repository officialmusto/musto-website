// npm modules
import { HashLink } from "react-router-hash-link"

// css
import "../NavBar/NavBar.css"

function NavBar() {
  return (
    <div id="nav-el">
      <nav className="nav">
        <div className="home">
          <HashLink 
          smooth to="/#home">
            home
          </HashLink>
        </div>
        <div className="portfolio">
        <HashLink smooth to="/#portfolio">
          portfolio
        </HashLink>
        </div>
        <div className="resume">
        <HashLink smooth to="/#resume">
          resume
        </HashLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
