import React from 'react';
import { Route,Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Task from '../features/Task/ClassComponent/Task'
import Home from '../features/Home/FunctionalComponet/Home'
import ThreeSceneFiber from '../features/ThreeJS/FunctionalComponent/ReactThreeFiber/ThreeSceneFiber';
import CreateStarship from '../features/ConsumeSwapi/CreateStarship'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/ThreeJSScene" component={ThreeSceneFiber}/>
          <Route path="/StarShip" component={CreateStarship}/>
      </Switch>
    </div>
  );
}

export default App;