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
          className="field-choice__item"
          onClick={() => this.props.onClick(item.id)}>
        <button type="button">
          {item.name}
        </button>
      </li>
    ));
    return elements;
  }

  render() {
    const { fieldsList } = this.props;
    return (
      <div className="field-card field-choice">
        <ul>
          {this.answersRender(fieldsList)}
        </ul>
      </div>
    );
  }
}

export default ChoicePanel;
