import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
      <nav className="nav-container">
        <a onClick={this.props.toggleMain} className="nav-links">Home</a>
        <a onClick={this.props.toggleAbout} className="nav-links">About</a>
        <a className="nav-links">Portfolio</a>
        <a className="nav-links">Resume</a>
      </nav>
    )
  }
}

export default Nav;
