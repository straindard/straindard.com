import React, { Component } from 'react';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <div className="header-menu">
          <div className="hamburger">
            <div className="burgerLine burgerLine1"></div>
            <div className="burgerLine burgerLine2"></div>
            <div className="burgerLine burgerLine3"></div>
          </div>
          </div>
        </header>
      </div>
    );
  }

}


export default App;
