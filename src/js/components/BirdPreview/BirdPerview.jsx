/* eslint-disable react/prop-types */
import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './BirdPerview.scss';


const BirdPerview = (props) => {
  const { bird, hidden } = props;
  let { image, name, audio } = bird;

  if (hidden) {
    image = '../../../assets/img/hidden.jpg';
    name = ' ~ | ? | ~ ';
  }
  return (
    <div className="bird-card">
      <div className="bird-card__img">
        <img src={image} alt={name} />
      </div>
      <div className="bird-card__body">
        <p className="bird-card__name">{name}</p>
        <AudioPlayer
          className="bird-card__audio"
          layout="horizontal-reverse"
          src={audio}
          customControlsSection={
            [
              RHAP_UI.MAIN_CONTROLS,
              RHAP_UI.VOLUME_CONTROLS,
            ]
          }
        />
      </div>
    </div>
  );
};

export default BirdPerview;
