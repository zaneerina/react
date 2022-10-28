
// added just for the class 
import {Component} from 'react'; 

import logo from './logo.svg';
import './App.css';

// function App() {
class App extends Component{ //added to create a class
  constructor(){
    super ();
    this.state ={
      name: {firstName: 'Zane', lastName: 'Erina'},
      company: 'testX'
    }
  }
  render (){ // added for class 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, my name is {this.state.name.firstName} {this.state.name.lastName} and I work at {this.state.company}
        </p>
        <button onClick={ () => 
          {
            this.setState({ name: 'Zane' })
          }}
        >
           Change name </button>
      </header>
    </div>
  );
  }
}

export default App;
