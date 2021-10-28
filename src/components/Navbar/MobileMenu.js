import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function MobileMenu() {
  return (
    <div id='menu-canvas' uk-offcanvas='overlay: true'>
      <div className='uk-offcanvas-bar'>
        <button
          className='uk-offcanvas-close'
          type='button'
          uk-close='true'
        ></button>
        <ul className='uk-list'>
          <li>
            <Link to='/about' className='nav-item mobile-nav-item'>
              About
            </Link>
          </li>
          <li>
            <Link
              to='/projects'
              className='nav-item mobile-nav-item'
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to='/skills'
              className='nav-item mobile-nav-item'
            >
              Skills
            </Link>
          </li>
          <li>
            <a className='nav-item mobile-nav-item'>Resume</a>
          </li>
          <li>
            <a
              uk-toggle='target: #contact-canvas'
              className='nav-item mobile-nav-item'
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
