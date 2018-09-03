import React, { Component } from 'react';
import { connect } from 'react-redux';
// import '../styles/portfolio-header.css';

class LandingPage extends Component {
  render() {
    return (
      <header role="banner" className="header-bar">
        <img className="logo" src={require('../assets/JR-logo.svg')} alt="logo" />
        <h2>Jonathan Riggs</h2>
        <nav className="nav-links">
          <a href="https://github.com/BuddhaL1T3">
            <img className="contact-thumbnail GH" src={require('../assets/contact/gitHub.svg')} alt="GitHub logo" />
          </a>
          <a href="https://www.linkedin.com/in/jonathan-riggs-34898476/">
            <img className="contact-thumbnail LI" src={require('../assets/contact/linkedIn.svg')} alt="LinkedIn logo" />
          </a>
          <a href="mailto:jmriggs75@gmail.com">
            <img className="contact-thumbnail M" src={require('../assets/contact/mail.svg')} alt="Mail logo" />
          </a>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  location: state.navRed.location
});

export default connect(mapStateToProps)(LandingPage);
