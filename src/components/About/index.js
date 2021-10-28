import React from 'react'
import './style.css'
import Header from '../../components/Header'

function AboutSection() {
  return (
    <div className="uk-container">
      <div className="uk-text-center">
        <div id="about-me-container">
          <div id="about-me">
            <Header title="About Me" />
            <p className="uk-text-justify about-me-desc">
              Hello! My name is Victor and I enjoy creating things that live on
              the internet!
              <br />
              Through my studies, I've gained a solid understanding of computer
              science and web development concepts, and have dedicated my free
              time to apply these concepts to real-world scenarios and
              applications.
              <br />
            </p>
            <img
              src="https://avatars.githubusercontent.com/u/80864042?v=4"
              alt="Me"
              id="me-pic"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
