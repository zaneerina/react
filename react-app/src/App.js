
// added just for the class 
import {Component} from 'react'; 

import logo from './logo.svg';
import './App.css';

// function App() {
  class App extends Component{ //added to create a class
  render (){ // added for class 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hello my name is Zane Erina
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
