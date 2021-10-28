import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import PortfolioCard from '../../components/PortfolioCard';
import CardContainer from "../../components/CardContainer";
import portfolioData from '../../utils/portfolioData';


function PortfolioPage() {
  return (
    <div className='portfolio-pic-section'>
      <Navbar />
      <Header padding={70} title='Portfolio' />
      <CardContainer>
        <div
          className='uk-child-width-1-2@m uk-grid-match'
          uk-grid='true'
          id='portfolio-section'
        >
          {portfolioData.map((el, index) => {
            return (
              <PortfolioCard
                title={el.title}
                about={el.about}
                builtWith={el.builtWith}
                repoURL={el.repoURL}
                siteURL={el.siteURL}
                imgURL={el.imgURL}
                key={index}
              />
            );
          })}
        </div>
      </CardContainer>
    </div>
  );
}

export default PortfolioPage;
