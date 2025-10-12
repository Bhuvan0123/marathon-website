import './App.css'
import Final from './pages/Final'
import ScrollBar from './pages/ScrollBar'
import Sponsers from './pages/Sponsers'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import AboutMember1 from './pages/About_Member1'
import AboutMember2 from './pages/About_Member2'
import { SparklesCore } from './components/ui/sparkles'
import HeroZoom from './pages/Landing'
import Categories from './pages/Categories'
import AboutMarathon from './pages/About_Marathon'
function Home() {
  return (
    <div className="font-sans">
      <HeroZoom/>
      <div className="min-h-[300vh] bg-amber-100 text-white p-10">
       
        <div className="h-[100vh]" />
        <div className="fixed inset-0 h-screen overflow-hidden">
          <SparklesCore id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={75}
              className="relative w-full h-full overflow-hidden"
              particleColor="#FF8000"/>
        </div>
        
        <div className="h-[100vh] " />
        
          <Navbar/>
          <AboutMarathon/>
          
          <AboutMember1/>
          <AboutMember2/>
          <Categories/>
          <Final/>
          <Sponsers/> 
          <ScrollBar/>

        </div>
      
        <Footer/>
    </div>
  )
}

export default Home
