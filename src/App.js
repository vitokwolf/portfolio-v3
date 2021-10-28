import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/About'
import SkillsPage from './pages/Skills'
import PortfolioPage from './pages/Portfolio'
import ContactCanvas from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'
import MobileMenu from './components/Navbar/MobileMenu'

function App() {
  return (
    <Router>
      <Route exact path="/" component={AboutPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/projects" component={PortfolioPage} />
      <Route path="/skills" component={SkillsPage} />
      <MobileMenu />
      <ContactCanvas />
      <ResumeModal />
      <Footer />
    </Router>
  )
}

export default App
