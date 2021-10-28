import React from 'react';
import './style.css';

function Header(props) {
  return (
    <div className='uk-text-center'>
      <h1 className='page-heading' style={{ paddingTop: props.padding }}>
        {props.title}
      </h1>
      <hr />
    </div>
  );
}

export default Header;
