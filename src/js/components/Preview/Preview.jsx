/* eslint-disable react/prop-types */
import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Preview.scss';

const Perview = (props) => {
  const { data, hidden } = props;
  let { image, name, audio } = data;

  if (hidden) {
    image = '../../../assets/img/hidden.png';
    name = '  * * * *  ';
  }
  return (
    <div className="field-card ">
      <div className="field-card__img ">
        <img src={image} alt={name} />
      </div>
      <div className="field-card__body">
        <p className="field-card__name">{name}</p>
        <AudioPlayer
          className="field-card__audio"
          layout="horizontal-reverse"
          autoPlayAfterSrcChange={false}
          src={audio}
          customControlsSection={
            [
              RHAP_UI.MAIN_CONTROLS,
              RHAP_UI.VOLUME_CONTROLS,
            ]
          }
        />
        <p className="field-card__help">Прослушайте аудиозапись и определите по ней птицу</p>
      </div>
    </div>
  );
};

export default Perview;
