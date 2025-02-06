// NPM MODULES
import { HashLink } from "react-router-hash-link"
import homeIcon from "../../assets/icons/home.png"
import widgetsIcon from "../../assets/icons/switch.png"
import docsIcon from "../../assets/icons/docs.png"
import commIcon from "../../assets/icons/community.png"
import donoIcon from "../../assets/icons/dono.png"


// FONT AWESOME ICONS
import { faHouse, faHouseChimney } from "@fortawesome/free-solid-svg-icons"

// CSS
import "../NavBar/NavBar.css"

function NavBar() {
  return (
    <div id="nav-el">
      <nav className="nav">
        <div className="widgets-icon">
        <img src={widgetsIcon} className="widgets-icon" />
        <HashLink smooth to="/widgets">
          widgets
        </HashLink>
        </div>
        <div className="docs-icon">
        <img src={docsIcon} className="docs-icon" />
        <HashLink smooth to="/">
          home
        </HashLink>
        </div>
        <div className="home-icon">
        <img src={homeIcon} className="home-icon" />
        <HashLink smooth to="/">
          home
        </HashLink>
        </div>        
        <div className="comm-icon">
        <img src={commIcon} className="comm-icon" />
        <HashLink smooth to="/">
          home
        </HashLink>
        </div>        
        <div className="dono-icon">
        <img src={donoIcon} className="dono-icon" />
        <HashLink smooth to="/donate">
          home
        </HashLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
