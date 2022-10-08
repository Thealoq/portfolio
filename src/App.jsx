import Footer from "./Layout/Footer"
import Navbar from "./Layout/Navbar"
import BioPage from "./Components/BioPage"
import ProjectPage from "./Components/ProjectPage"
import GithubRepoPage from "./Components/GithubRepoPage"
import config from "./config.json"
import './App.css'
export default function App() {
  document.title = config.name + " | home Page"
  return (
    <div className="App">
      <Navbar />
       <BioPage />
        <ProjectPage />
        <GithubRepoPage />
      <Footer />
    </div>
  )
}

