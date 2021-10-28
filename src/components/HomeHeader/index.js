import React from 'react'
import './style.css'

function HomeHeader() {
  return (
    <div className="uk-container">
      <div className="uk-text-center">
        <div id="title-container">
          <h1 id="my-name" style={{ margin: 0 }}>
            Victor Lupascu
          </h1>
          <h5 className="uk-text-lighter subtitle" id="my-sub">
            Full-Stack Web Developer
          </h5>
        </div>
      </div>
    </div>
  )
}

export default HomeHeader
