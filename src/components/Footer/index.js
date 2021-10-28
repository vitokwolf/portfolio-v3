import React from 'react'
import './style.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className="uk-text-center uk-text-middle footer">
        <span> © Victor Lupascu</span> <br />
        <a
          uk-icon="icon: github"
          href="https://github.com/vitokwolf"
          className="contact-icon contact-link-icon"
          target="_blank"
        ></a>
        <a
          uk-icon="icon: mail"
          className="contact-icon contact-link-icon"
          href="mailto:victor.lupascu.1985@gmail.com"
        ></a>
        <a
          uk-icon="icon: linkedin"
          href="https://www.linkedin.com/in/victor-lupascu-823650209/"
          target="_blank"
          className="contact-icon contact-link-icon"
        ></a>
      </footer>
    )
  }
}

export default Footer
