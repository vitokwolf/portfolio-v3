import React from 'react';

function CardContainer(props) {
  return (
    <div className='uk-container card-container'>
      {props.children}
      <div className='uk-margin-medium-bottom'></div>
    </div>
  );
}

export default CardContainer;
