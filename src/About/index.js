import React from 'react'
import './style.css'
import Navbar from '../../components/Navbar'
import HomeHeader from '../../components/HomeHeader'
import AboutSection from '../../components/About'

function AboutPage() {
  return (
    <div id="pic-section" uk-parallax="bgy: -200">
      <Navbar />
      <HomeHeader />
      <AboutSection />
    </div>
  )
}

export default AboutPage
