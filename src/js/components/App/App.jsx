/* eslint-disable import/extensions */
import 'normalize.css';
import './app.scss';
import React from 'react';

import playSound from '../../modules/playSound';
import 'animate.css';

import AppHeader from '../AppHeader/AppHeader.jsx';
import LevelMap from '../LevelMap/LevelMap.jsx';
import Preview from '../Preview/Preview.jsx';
import ChoicePanel from '../ChoicePanel/ChoicePanel.jsx';
import DescriptionPanel from '../DescriptionPanel/DescriptionPanel.jsx';
import NextLevelBtn from '../NextLevelBtn/NextLevelBtn.jsx';
import GameOverScreen from '../GameOverScreen/GameOverScreen.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 0,
      maxLevel: this.props.data.length,
      hiddenFieldIndex:  this.props.data[0][0].correctAnswerId[0],
      questionId: 0,
      selectedFieldIndex: false,
      gameOver: false,
      isWin: false,
      levelScore: 5,
      totalScore: 0,
    };
  }

  onWin() {
    this.setState({ win: true });
  }

  chooseField(id, selector) {
    this.setState(() => {
      const newActiveField = id ;
      return ({ selectedFieldIndex: newActiveField });
    });
    if (id === this.state.hiddenFieldIndex) {
      document.querySelector(selector).classList.add('pass');
      this.setState({ isWin: true });
      const points = 5 -  document.querySelectorAll('.field-choice__item.failure').length;
      this.setState({ levelScore: points });
    } else {
      document.querySelector(selector).classList.add('failure', 'animate__animated', 'animate__headShake');
    }
  }

  goNextLevel() {
    this.calcScore();
    const nextLevel = this.state.currentLevel + 1;
    document.querySelectorAll('.field-choice__item').forEach((item) => {
      item.classList.remove('pass', 'failure', 'animate__animated', 'animate__headShake');
    });
    if (nextLevel > this.state.maxLevel - 1) {
      this.setState(({ gameOver }) => ({ gameOver: true }));
      return;
    }
    this.setState({
      currentLevel: nextLevel,
      gameOver: false,
      isWin: false,
      hiddenFieldIndex: this.props.data[nextLevel][0].correctAnswerId[0],
      levelScore: 5,
      selectedFieldIndex: false,
    });
    console.log(this.props.data[nextLevel][0]);
    console.log(nextLevel + " - " + this.props.data.length);
    
  }

  calcScore() {
    if (this.state.isWin) {
      const newScore = this.state.levelScore + this.state.totalScore;
      this.setState({ totalScore: newScore });
    }
  }

  restartHandler() {
    playSound('../../../assets/sounds/restart.mp3');
    this.setState({
      totalScore: 0,
      currentLevel: 0,
      gameOver: false,
      isWin: false,
      hiddenFieldIndex:  this.props.data[0][0].correctAnswerId[0],
      levelScore: 5,
      selectedFieldIndex: false,
    });
  }

  renderLevel() {
    const { data } = this.props;

    const {
      currentLevel, hiddenFieldIndex, isWin, totalScore, selectedFieldIndex,
    } = this.state;
    const levelFields = data[currentLevel];
    const hiddenField = levelFields[hiddenFieldIndex - 1];
    const activeField = levelFields[selectedFieldIndex];
    return (
      <div className="level">
        <AppHeader
          score={totalScore}
        />
        <Preview hidden={!isWin} data={hiddenField} isWin={isWin} />
        <ChoicePanel
          fieldsList={levelFields}
          onClick={(id, selector) => this.chooseField(id, selector)}
          onWin={() => { this.onWin(); }}
        />
        <NextLevelBtn
          onClick={() => this.goNextLevel()}
          isWin={isWin}
        />
      </div>
    );
  }

  render() {
    const { gameOver, totalScore, isWin, maxLevel, levelScore } = this.state;
    const maxScore = (maxLevel ) * 5;
    if (!gameOver) {
      return (
        <div className="container">
          {this.renderLevel()}
        </div>
      );
    }
    return (
      <GameOverScreen
        score={totalScore}
        maxScore={maxScore}
        onRestart={() => this.restartHandler()}
      />
    );
  }
}
