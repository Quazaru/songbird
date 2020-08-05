import React from 'react';

import './GameOverScreen.scss';

const restartHandler = (condition, handler) => {
  if (condition) {
    return (
      <button
        type="button"
        className="game-over__restart-btn"
        onClick={() => handler()}
      >
        Сыграть снова
      </button>
    );
  }
  return (
    <div className="congrats">
      <p>Вы набрали максимальное количество баллов! Можете похвастаться знакомым.</p>
      <img src="../../../assets/img/congrats.gif" alt="" srcSet="" />
    </div>
  );
};

const GameOverScreen = (props) => {
  const { score, maxScore, onRestart } = props;
  return (
    <div className="game-over container">
      <div className="game-over__header">
        <p>Поздравляем с прохождением викторины!</p>
      </div>
      <div className="game-over__body">
        <p className="game-over__score">
          Ваш счёт:
          <span>
            {' '}
            {score}
            {' '}
          </span>
        </p>
        <p className="game-over__score game-over__score_max">
          Максимальный балл:
          <span>
            {' '}
            {maxScore}
            {' '}
          </span>
        </p>
        {restartHandler(maxScore !== score, onRestart)}
      </div>
    </div>
  );
};

export default GameOverScreen;
