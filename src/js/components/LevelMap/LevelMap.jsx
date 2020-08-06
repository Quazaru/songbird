import React from 'react';
import './LevelMap.scss';

const levels = [
  'Тестовый раунд',
  'Survival',
  'MMORPG',
  'Shooter',
  'Chill games',
  'LEGENDS',
];

const renderLevels = (data, activeIndex) => {
  const levelsList = data.map((item, idx) => {
    if (idx === activeIndex) {
      return (
        <li className="level-map__item active" key={`${idx}-level`}>
          <p>{item}</p>
        </li>
      );
    }
    return (
      <li className="level-map__item" key={`${idx}-level`}>
        <p>{item}</p>
      </li>
    );
  });
  return levelsList;
};

const LevelMap = (props) => (
  <ul className="level-map">
    { renderLevels(levels, props.currentLevel) }
  </ul>
);

export default LevelMap;
