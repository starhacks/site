import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StarfieldAnimation from 'react-starfield-animation';

ReactDOM.render(
  <React.StrictMode>
    <StarfieldAnimation
      style={{
        zIndex: -1,
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
