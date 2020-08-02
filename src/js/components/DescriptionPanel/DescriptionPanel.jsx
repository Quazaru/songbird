/* eslint-disable react/prop-types */
import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import './DescriptionPanel.scss';

const DescriptionPanel = (props) => {
  const { bird } = props;
  if (!bird) {

  }
  const {
    image, name, species, description, audio,
  } = bird;
  return (
    <div className="bird-card description-panel">
      <div className="bird-card__img">
        <img src={image} alt={name} />
      </div>
      <div className="bird-card__body">
        <p className="bird-card__name">{name}</p>
        <p className="bird-card__subtitle bird-card__name">{species}</p>
      </div>
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
      <div className="bird-card__description">{description}</div>
    </div>
  );
};

export default DescriptionPanel;
