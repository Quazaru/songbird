import React from 'react';
import './AppHeader.scss';

const AppHeader = (props) => (
  <header>
    <p className="logo">Song<span>Bird</span></p>
    <p>
      Score:
      <span className='important-counter'>{' ' + props.score}</span>
    </p>
  </header>
);

export default AppHeader;
