import 'normalize.css';
import './app.scss';
import birdsData from '../../../assets/data-base/birds';
import React from 'react';
import AppHeader from '../AppHeader/AppHeader.jsx';
import LevelMap from '../LevelMap/LevelMap.jsx';
import BirdPerview from '../BirdPreview/BirdPerview.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <AppHeader
          score="3"
        />
        <LevelMap levelNumber={0} />
        <BirdPerview hidden={false} bird={birdsData[0][0]} />
      </div>
    );
  }
}
