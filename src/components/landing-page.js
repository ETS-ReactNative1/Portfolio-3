import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import '../styles/portfolio-header.css';

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment className="landing-page">
        <h3>Who am I?</h3>
        <p>Blah</p>
        <h3>Why me?</h3>
        <p>Blah</p>
        <Link to="/JonathanRiggs">Check it out...</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  location: state.navRed.location
});

export default connect(mapStateToProps)(LandingPage);
