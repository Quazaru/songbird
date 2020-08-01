/* eslint-disable react/prop-types */
import React from 'react';
import './ChoicePanel.scss';

class ChoicePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 5,
    };
  }

  answersRender(array) {
    const elements = array.map((item) => {
      return (
        <li key={item.id} className='bird-choice__item'>
          <button type='button'>
            {item.name}
          </button>
        </li>
      )
    })
    return elements;
  }

  render() {
    const { birdList, answerBird } = this.props;
    return (
      <div className="bird-card bird-choice">
        <ul>
          {this.answersRender(birdList)}
        </ul>
      </div>
    );
  }
}

export default ChoicePanel;
