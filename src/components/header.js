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

        {/* <svg className="header-trans" viewBox="0 0 200 100" preserveAspectRatio="none">
          <circle fill="#A8A8A8" cx="0" cy="100" r="100" />
          <circle fill="#A8A8A8" cx="200" cy="100" r="100" />
        </svg> */}
        {/* <svg className="header-trans" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#A8A8A8" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100" />
          <polygon
            fill="#A8A8A8"
            points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
          />
        </svg> */}
      </header>
    );
  }
}

export default Header;
