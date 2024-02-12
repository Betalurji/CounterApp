import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './Counter'; 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp /> 
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
