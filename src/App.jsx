// css
import './App.css'

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
      <div className='all-el'>
        <div className='profile-and-about'>
          <div className='about-child'>
            <ProfileCard />
            <About />
          </div>
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