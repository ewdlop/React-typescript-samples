import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import Task from './features/Task/Task'
import Test from './features/Test/Test'
import * as serviceWorker from './serviceWorker';
import ThreeScene from './features/Three/three';

ReactDOM.render(
  <React.StrictMode>
    <ThreeScene/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();