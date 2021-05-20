/* eslint-disable react/prop-types */
import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './Preview.scss';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
    this.state = {
      win: this.props.isWin,
    };
  }

  render() {
    const { data, hidden, isWin } = this.props;
    let { title, description  } = data;
    return (
      <div className="field-card ">
        <div className="field-card__body">
          <p className="field-card__name">{title}</p>

          <p className="field-card__help">Выберите правильный ответ</p>
        </div>
      </div>
    );
  }
}

export default Preview;
