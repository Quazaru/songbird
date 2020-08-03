import '../assets/css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import data from '../assets/data-base/data';
import App from './components/App/App.jsx';

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root'),
);
