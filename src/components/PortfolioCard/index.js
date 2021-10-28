import React from 'react';
import './style.css';

function PortfolioCard(props) {
  let description = props.about.split('\n').map((i) => {
    return <p>{i}</p>;
  });

  return (
    <div>
      <div className='uk-card uk-card-default portfolio-card'>
        <div className='uk-card-body portfolio-card-body'>
          <div
            className='uk-position-relative uk-visible-toggle uk-light'
            tabIndex='-1'
            uk-slideshow='true'
          >
            <div className='uk-flex uk-flex-between'>
              <h3 className='uk-card-title project-title'>{props.title}</h3>
              <div className='uk-flex uk-flex-middle wrapper'>
                {props.siteURL && 
                <div className='icon'>
                  <div className='tooltip'>Website</div>
                    <a
                      href={props.siteURL}
                      target='_blank'
                      uk-icon='icon: world'
                      ratio='1.15'
                      className='contact-icon contact-link-icon'
                    >
                    </a>
                </div>
                }
                { props.repoURL && 
                <div className='icon'>
                  <div className='tooltip'>Github</div>
                    <a
                      href={props.repoURL}
                      target='_blank'
                      uk-icon='icon: github'
                      ratio='1.3'
                      className='contact-icon contact-link-icon'
                    >
                    </a>
                </div>
                }
              </div>
            </div>

            <ul className='uk-slideshow-items'>
              <li>
                <p className='project-description'>{description}</p>
              </li>
              <li>
                <img src={props.imgURL} alt={props.title} uk-cover='true' />
              </li>
            </ul>
            <a
              className='slidenav uk-position-center-right uk-hidden-hover'
              href='/'
              uk-slidenav-next='true'
              uk-slideshow-item='next'
            ></a>
          </div>
        </div>
        <div>
          <p className='project-built-with uk-text-center'>{props.builtWith}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
