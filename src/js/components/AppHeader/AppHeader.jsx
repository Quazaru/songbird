import React from 'react';
import './AppHeader.scss';

const AppHeader = (props) => (
  <header>
    <p className="logo">Тестирование по <span> химии</span> 9 класс</p>
    <p>
      Score:
      <span className='important-counter'>{' ' + props.score}</span>
    </p>
  </header>
);

export default AppHeader;
