import './App.css'
import Navbar from './pages/NavBar'
import AboutMarathon from './pages/About_Marathon'
import AboutMember from './pages/About_member'
import Rules from './pages/Rules'
import Final from './pages/Final'
import ScrollBar from './pages/ScrollBar'
import TimelinePage from './pages/Timeline'
import { SparklesCore } from './components/ui/sparkles'
function App() {
  return (
    <div className="font-sans">
      <div className="w-full fixed inset-0 h-screen">
        <SparklesCore id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FF0000"/>
      </div>
      <Navbar/>
      <AboutMarathon/>
      <AboutMember/>
      <TimelinePage/>
      <Rules/>
      <Final/>
      <ScrollBar/>
    </div>
  )
}

export default App
