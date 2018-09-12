import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class Header extends Component {
  render() {
    return (
      <header role="banner" className="header-bar">
        <div className="header-title-box">
          <img className="logo" src={require('../assets/JR-logo.svg')} alt="logo" />
          <div className="header-title">
            <h1>Jonathan Riggs</h1>
            <h2> | Full Stack Developer</h2>
          </div>
        </div>
        <nav className="header-links">
          <Scrollchor to="#about">About</Scrollchor> |
          <Scrollchor to="#projects" animate={{ duration: 800 }}>
            Projects
          </Scrollchor>
          |
          <Scrollchor to="#footer" animate={{ duration: 1000 }}>
            Contact
          </Scrollchor>
        </nav>
      </header>
    );
  }
}

export default Header;
