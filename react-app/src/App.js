
// added just for the class
import {Component} from 'react';

import logo from './logo.svg';
import './App.css';

// function App() {
class App extends Component{
  // this App component represents the entire application;
  // it will be rendered in the index.js file
  constructor(){
    super ();
    this.state ={


      monsters: [
        {
          name: 'Linda',
          id: '16hadsw'
        },
        {
          name: 'Franko',
          id: '10adsiw'
        },
        {
          name: 'Donatello',
          id: '11dswsds'
        },
        {
          name: 'You',
          id: '12adsw'
        }
      ]

    };
  }
  render (){ // added for class
  return (
    <div className="App">
      {
        // (monster) is optional
        this.state.monsters.map((monster)=> {
          return <div key = {monster.id}>
          </div>
        })
      }
    </div>
  );
  }
}

export default App;
