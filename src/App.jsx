import './App.css'
import Navbarr from './Navbarr/Navbarr'
import About from './About/About'
import Skill from './Skill/Skill'
import Contact from './Contact/Contact'
import Education from './Education/Education'
import Footer from './Footer/Footer'
import Project from './Project/Project'
import Aboutme from './Aboutme/Aboutme'
import Certification from './Certification/Certification'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Experience from './Experiance/Experiance'

function App() {
  

  return (
    
    <BrowserRouter>
    
    <Routes>
      
      <Route path="/" element={
        <>
          <Navbarr />
          <About />
          <Aboutme />
          <Education />
          <Experience/>
          <Project />
          <Skill />
          <Certification/>
          <Contact />
          <Footer />
        </>
      } />
      
      {/* <Route path="/aboutme" element={<Aboutme />} />
        
        <Route path="/project" element={<Project />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} /> */}
    </Routes>

  </BrowserRouter>
    
      
  
  )
}

export default App
