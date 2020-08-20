import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import Task from './features/Task/Task'
import Test from './features/Test/Test'
import * as serviceWorker from './serviceWorker';
import ThreeScene from './features/Three/ThreeScene';
import Box from './features/Three/ThreeSceneFiber';
import { Canvas } from 'react-three-fiber'
 
ReactDOM.render(
  <React.StrictMode>
    <Test/>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Canvas>
//     <ambientLight />
//     <pointLight position={[10, 10, 10]} />
//     <Box position={[-1.2, 0, 0]} />
//     <Box position={[1.2, 0, 0]} />
//   </Canvas>,
//   document.getElementById('root')
// )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();