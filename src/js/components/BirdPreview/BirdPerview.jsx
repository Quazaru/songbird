/* eslint-disable react/prop-types */
import React from 'react';
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
        <div className="bird-card__player">f</div>
      </div>
    </div>
  );
};

export default BirdPerview;
