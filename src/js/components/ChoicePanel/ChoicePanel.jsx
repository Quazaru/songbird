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
    const elements = array.map((item) => {
      if(item.isQuestion) return;
      const className = 'field-choice__item';
      const selector = `.${className}#answer-${item.id}`;
      return (
        <li
          id={`answer-${item.id}`}
          key={item.id}
          className={className}
          onClick={() => this.props.onClick(item.id, selector)}
        >
          <button type="button">
            {item.title}
          </button>
        </li>
      );
    });
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
