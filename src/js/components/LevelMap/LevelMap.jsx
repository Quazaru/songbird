import React from 'react';
import './LevelMap.scss';

const LevelMap = (props) => {
  // const { levelNumber } = props;
  // const levels = document.querySelectorAll('.level-map__item');
  // levels[levelNumber].classList.add('active');
  return (
    <ul className='level-map'>
      <li className='level-map__item active'>
        <p>Тестовый раунд</p>
      </li>
      <li className='level-map__item'>
        <p>Воробьиные</p>
      </li>
      <li className='level-map__item'>
        <p>Лесные птицы</p>
      </li>
      <li className='level-map__item'>
        <p>Певчие птицы</p>
      </li>
      <li className='level-map__item'>
        <p>Хищные птицы</p>
      </li>
      <li className='level-map__item'>
        <p>Морские птицы</p>
      </li>
    </ul>
  )
}

export default LevelMap;
