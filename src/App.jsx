// css
import './App.css'

// assets
import bannerBackground from './assets/videos/mustobs.mp4'


// components
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import ProfileCard from './components/ProfileCard/ProfileCard'
import ProjectList from './components/ProjectList/ProjectList'
import Resume from './components/Resume/Resume'


function App() {
  
  return (
    <>
    <NavBar />
    <div className="banner-div">
  <video autoPlay loop muted playsInline>
    <source src={bannerBackground} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
      <div className='all-el'>
        <div className='profile-and-about'>
            <ProfileCard />
            <About />
        </div>
        <div className='projects-and-resume'>
          <ProjectList />
          <Resume />
        </div>
      </div>
    </>
  )
}
export default App