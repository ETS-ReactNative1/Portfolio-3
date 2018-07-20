import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import logo from '../images/JR-logo.png';
import '../styles/portfolio-header.css';

class PortfolioHeader extends Component {
  changePage() {
    return <Redirect to="about/" />;
  }
  render() {
    return (
      <header role="banner" className="row">
        <img src={logo} className="logo" alt="logo" />
        <nav className="nav-links">
          <Link to="/projects/">Projects</Link>
          <Link to="/about/">About</Link>
          <Link to="/resume/">Resume</Link>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  location: state.navRed.location
});

export default connect(mapStateToProps)(PortfolioHeader);
