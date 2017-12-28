import React, { Component } from 'react';
import logo from './white-logo.png';
import Nav from './Components/Nav.js';
import MainTitle from './Components/MainTitle.js';
import AboutSection from './Components/AboutSection.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: false,
      about: false
    }
  }

  toggleMain = (e) => {
    e.preventDefault()
    if (this.state.main === false) {
      this.setState({main: true})
    }
    this.setState({
      about: false
    })
  }

  toggleAbout = (e) => {
    e.preventDefault()
    if (this.state.about === false) {
      this.setState({about: true})
    }
    this.setState({
      main: false
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Nav toggleMain={this.toggleMain}
          toggleAbout={this.toggleAbout} />
        </header>
        <main>
          {this.state.main ? <MainTitle /> : null}
          {this.state.about ? <AboutSection /> : null}
        </main>
      </div>
    );
  }
}

export default App;
