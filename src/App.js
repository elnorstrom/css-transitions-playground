import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cakes: [
        'chocolate cake',
        'fudge cake',
        'carrot cake'
      ],
      newCake: false
    };
  };
  render() {
    return (
      <div className="App">
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={3000}
        >
          <header className="App-header">
            <h1 className="App-title">Css transitions</h1>
          </header>
          <button onClick={() => this.setState(() => ({ 
            newCake: !this.state.newCake
          }))}
          >Cakes
          </button>
        </CSSTransitionGroup>
        
        
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionAppear={true}
          transitionAppearTimeout={3000}
        >
        {this.state.newCake && this.state.cakes.map((cake) => <p key={cake}>{cake}</p>)}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;

