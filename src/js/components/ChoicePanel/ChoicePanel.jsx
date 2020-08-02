/* eslint-disable class-methods-use-this */
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
    const elements = array.map((item) => (
      <li
          key={item.id} 
          className="bird-choice__item"
          onClick={() => this.props.onClick(item.id)}>
        <button type="button">
          {item.name}
        </button>
      </li>
    ));
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
