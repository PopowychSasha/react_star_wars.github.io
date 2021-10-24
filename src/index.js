import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App/App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <h1 className="header">Hello Index</h1>
  </React.StrictMode>,
  document.getElementById('root')
);
