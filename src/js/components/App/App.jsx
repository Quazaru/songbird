/* eslint-disable import/extensions */
import 'normalize.css';
import './app.scss';
import React from 'react';
import birdsData from '../../../assets/data-base/birds';
import AppHeader from '../AppHeader/AppHeader.jsx';
import LevelMap from '../LevelMap/LevelMap.jsx';
import BirdPerview from '../BirdPreview/BirdPerview.jsx';
import ChoicePanel from '../ChoicePanel/ChoicePanel.jsx';
import DescriptionPanel from '../DescriptionPanel/DescriptionPanel.jsx';
import NextLevelBtn from '../NextLevelBtn/NextLevelBtn.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 0,

    };
  }

  render() {
    const { currentLevel } = this.state;
    return (
      <div className="container">
        <AppHeader
          score="3"
        />
        <LevelMap levelNumber={0} />
        <BirdPerview hidden={false} bird={birdsData[0][0]} />
        <ChoicePanel birdList={birdsData[currentLevel]} />
        <DescriptionPanel bird={birdsData[0][0]} />
        <NextLevelBtn />
      </div>
    );
  }
}
