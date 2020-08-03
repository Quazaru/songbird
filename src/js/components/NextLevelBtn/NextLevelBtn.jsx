import React from 'react';
import './NextLevelBtn.scss';
import playSound from '../../modules/playSound';

const clickHandler = (src, callback) => {
  const sound = new Audio();
  sound.src = src;
  sound.play();

  callback();
};

const NextLevelBtn = (props) => {
  const { isWin } = props;
  return (
    <button
      type="button"
      className={`next-level-btn ${!isWin ? 'disabled' : ''}`}
      onClick={() => (isWin ? clickHandler('../../../assets/sounds/sound.mp3', props.onClick)
        : '')}

    >
      Next level
    </button>
  );
};

export default NextLevelBtn;
