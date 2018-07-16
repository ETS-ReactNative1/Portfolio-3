import React, { Component } from 'react';

import AboutMe from '../components/about-me';

import logo from '../images/JR-logo.png';
import '../styles/portfolio-header.css';

class PortfolioHeader extends Component {
  render() {
    return (
      <header role="banner" className="portfolio-header">
        <img src={logo} className="portfolio-logo" alt="logo" />
        <h1 className="portfolio-title">Hello, my name is Jonathan Riggs</h1>
        <nav className="portfolio-header-nav">
          <AboutMe />
        </nav>
      </header>
    );
  }
}

export default PortfolioHeader;
