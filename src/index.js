import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Components/Content';
import Header from './Components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

