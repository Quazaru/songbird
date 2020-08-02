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
      hiddenBird: Math.floor(Math.random() * 5),
      selectedBird: false,
      win: false,
      currentScore: 5,
    };
  }

  onWin() {
    this.setState({ win: true });
  }

  chooseBird(id) {
    this.setState(({ selectedBird }) => {
      const newActiveBird = id - 1;
      return ({ selectedBird: newActiveBird });
    });
    if (id - 1 === this.state.hiddenBird) {
      console.log(id - 1, this.state.hiddenBird);
      this.setState({ win: true });
    } else {
      this.setState(({ currentScore }) => {
        const newScore = currentScore - 1;
        return { currentScore: newScore };
      });
    }
  }

  render() {
    const { currentLevel, hiddenBird, win, currentScore, selectedBird } = this.state;
    const levelBirds = birdsData[currentLevel];
    const currentBird = levelBirds[hiddenBird];
    const activeBird = levelBirds[selectedBird];
    return (
      <div className="container">
        <AppHeader
          score={currentScore}
        />
        <LevelMap levelNumber={0} />
        <BirdPerview hidden={!win} bird={currentBird} />
        <ChoicePanel
          birdList={levelBirds}
          onClick={(id) => this.chooseBird(id)}
          onWin={() => { this.onWin(); }}
        />
        <DescriptionPanel bird={activeBird} />
        <NextLevelBtn />
      </div>
    );
  }
}
