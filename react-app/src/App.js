
// added just for the class 
import {Component} from 'react'; 

import logo from './logo.svg';
import './App.css';

// function App() {
class App extends Component{ //added to create a class
  constructor(){
    super ();
    this.state ={
      name: 'Zanite'
    }
  }
  render (){ // added for class 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {this.state.name}
        </p>
        <button> Change name </button>
      </header>
    </div>
  );
  }
}

export default App;
