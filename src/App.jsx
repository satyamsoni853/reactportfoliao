import './App.css'
import Navbarr from './Navbarr/Navbarr'
import About from './About/About'
import Skill from './Skill/Skill'
import Contact from './Contact/Contact'
import Education from './Education/Education'
import Footer from './Footer/Footer'
import Project from './Project/Project'
import Aboutme from './Aboutme/Aboutme'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  

  return (
    
    <BrowserRouter>
    
    <Routes>
      
      <Route path="/home" element={
        <>
          <Navbarr />
          <About />
          <Aboutme />
          <Education />
          <Project />
          <Skill />
          <Contact />
          <Footer />
        </>
      } />
      
      <Route path="/aboutme" element={<Aboutme />} />
        
        <Route path="/project" element={<Project />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>

  </BrowserRouter>
    
      
  
  )
}

export default App
