import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { changeLocation } from '../actions/nav-actions';

import logo from '../images/JR-logo.png';
import '../styles/portfolio-header.css';

class PortfolioHeader extends Component {
  render() {
    return (
      <header role="banner" className="portfolio-header">
        <div className="PH-logo-nav">
          <img src={logo} className="PH-logo" alt="logo" />
          <nav className="PH-nav">
            <button
              className="PH-work-button"
              onClick={() => this.props.history.push('/work/')}
            >
              work
            </button>
            <button
              className="PH-play-button"
              onClick={() => this.props.history.push('/play/')}
            >
              play
            </button>
            <button
              className="PH-about-button"
              onClick={() => this.props.history.push('/about/')}
            >
              about
            </button>
            <button
              className="PH-resume-button"
              onClick={() => this.props.history.push('/resume/')}
            >
              resume
            </button>
          </nav>
        </div>
        <h1 className="PH-title">Hello, my name is Jonathan Riggs</h1>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  location: state.navRed.location
});

export default connect(mapStateToProps)(PortfolioHeader);
