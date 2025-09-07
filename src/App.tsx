import './App.css'
import Navbar from './pages/NavBar'
import AboutMarathon from './pages/About_Marathon'
import AboutMember from './pages/About_member'
import Timeline from './pages/Timeline'
import Rules from './pages/Rules'
import Final from './pages/Final'
import ScrollBar from './pages/ScrollBar'
function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <AboutMarathon/>
      <AboutMember/>
      <Timeline/>
      <Rules/>
      <Final/>
      <ScrollBar/>
    </div>
  )
}

export default App
