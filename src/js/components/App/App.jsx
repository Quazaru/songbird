/* eslint-disable import/extensions */
import 'normalize.css';
import './app.scss';
import React from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import LevelMap from '../LevelMap/LevelMap.jsx';
import Preview from '../Preview/Preview.jsx';
import ChoicePanel from '../ChoicePanel/ChoicePanel.jsx';
import DescriptionPanel from '../DescriptionPanel/DescriptionPanel.jsx';
import NextLevelBtn from '../NextLevelBtn/NextLevelBtn.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: 0,
      hiddenFieldIndex: Math.floor(Math.random() * 5),
      selectedFieldIndex: false,
      isWin: false,
      currentScore: 5,
    };
  }

  onWin() {
    this.setState({ win: true });
  }

  chooseField(id) {
    this.setState(() => {
      const newActiveField = id - 1;
      return ({ selectedFieldIndex: newActiveField });
    });
    if (id - 1 === this.state.hiddenFieldIndex) {
      this.setState({ isWin: true });
    } else {
      this.setState(({ currentScore }) => {
        const newScore = currentScore - 1;
        return { currentScore: newScore };
      });
    }
  }

  render() {
    const { data } = this.props;

    const {
      currentLevel, hiddenFieldIndex, isWin, currentScore, selectedFieldIndex,
    } = this.state;
    const levelFields = data[currentLevel];
    const hiddenField = levelFields[hiddenFieldIndex];
    const activeField = levelFields[selectedFieldIndex];
    return (
      <div className="container">
        <AppHeader
          score={currentScore}
        />
        <LevelMap levelNumber={0} />
        <Preview hidden={!isWin} data={hiddenField} />
        <ChoicePanel
          fieldsList={levelFields}
          onClick={(id) => this.chooseField(id)}
          onWin={() => { this.onWin(); }}
        />
        <DescriptionPanel data={activeField} />
        <NextLevelBtn />
      </div>
    );
  }
}
