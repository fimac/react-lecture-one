import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputTest from './Components/InputTest';
import isAuthenticated from './Components/IsAuthenticated';
import Authenticated from './Components/Authenticated';

class App extends Component {
  state = {
    authenticated: false,
  };
  handleClick = () => {
    this.setState(prev => ({ authenticated: !prev.authenticated }));
  };
  render() {
    const WrappedAuth = isAuthenticated(
      Authenticated,
      this.state.authenticated
    );

    console.log('WrappedAuth', WrappedAuth);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <InputTest value={this.state.name} />
        <WrappedAuth />
        <button onClick={this.handleClick}>
          {this.state.authenticated ? 'LogOut' : 'Login'}
        </button>
      </div>
    );
  }
}

export default App;
