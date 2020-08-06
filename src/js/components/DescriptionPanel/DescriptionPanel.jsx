/* eslint-disable react/prop-types */
import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import './DescriptionPanel.scss';

const renderDescription = (data) => {
  if (data) {
    const {
      image, name, species, description, audio,
    } = data;
    return (
      <div className="field-card description-panel">
        <div className="field-card__img">
          <img src={image} alt={name} />
        </div>
        <div className="field-card__body">
          <p className="field-card__name">{name}</p>
          <p className="field-card__subtitle field-card__name">{species}</p>
        </div>
        <AudioPlayer
          className="field-card__audio"
          layout="horizontal-reverse"
          autoPlay={false}
          autoPlayAfterSrcChange={false}
          src={`../../../${audio}`}
          customControlsSection={
            [
              RHAP_UI.MAIN_CONTROLS,
              RHAP_UI.VOLUME_CONTROLS,
            ]
          }
        />
        <div className="field-card__description">{description}</div>
      </div>
    );
  }
  return (
    <div className="field-card description-panel">

      <div className="field-card__body">
        <p className="field-card__name">Для показа описания выберите птицу</p>
      </div>

    </div>
  );
};

const DescriptionPanel = (props) => {
  const { data } = props;
  return renderDescription(data);
};

export default DescriptionPanel;
