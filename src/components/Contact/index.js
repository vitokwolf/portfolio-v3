import React from 'react'
import './style.css'

function ContactCanvas() {
  return (
    <div id="contact-canvas" uk-offcanvas="overlay: true">
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          uk-close="true"
        ></button>
        <h3 id="contact-title">Contact Me</h3>
        <ul className="uk-list">
          <li className="uk-flex uk-flex-middle">
            <a
              uk-icon="icon: mail"
              className="contact-icon contact-link-icon"
              href="mailto:victor.lupascu.1985@gmail.com"
            ></a>
            <a
              className="contact-link contact-li"
              href="mailto:victor.lupascu.1985@gmail.com"
            >
              victor.lupascu.1985@gmail.com
            </a>
          </li>
          <li className="uk-flex uk-flex-middle">
            <span className="contact-icon" uk-icon="icon: receiver"></span>
            <span className="contact-li">(210) 630-8448</span>
          </li>
          <li className="uk-flex uk-flex-middle">
            <span uk-icon="icon: home" className="contact-icon"></span>
            <span className="contact-li">Austin, TX</span>
          </li>
          <li className="uk-flex uk-flex-middle">
            <a
              uk-icon="icon: github"
              href="https://github.com/vitokwolf"
              className="contact-icon contact-link-icon"
              target="_blank"
            ></a>
            <a
              className="contact-link contact-li"
              href="https://github.com/vitokwolf"
              target="_blank"
            >
              vitokwolf
            </a>
          </li>
          <li className="uk-flex uk-flex-middle">
            <a
              uk-icon="icon: linkedin"
              href="https://www.linkedin.com/in/victor-lupascu-823650209/"
              className="contact-icon contact-link-icon"
              target="_blank"
            ></a>
            <a
              className="contact-link contact-li"
              href="https://www.linkedin.com/in/victor-lupascu-823650209/"
              target="_blank"
            >
              Victor Lupascu
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactCanvas
