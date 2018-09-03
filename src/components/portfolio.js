import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import JonathanRiggs from './jonathan-riggs';
import GameStrat from './gameStrat';
import LandingPage from './landing-page';
import Header from './header';

// import '../styles/portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Header} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/JonathanRiggs" component={JonathanRiggs} />
        <Route exact path="/JonathanRiggs/gameStrat" component={GameStrat} />
      </React.Fragment>
    );
  }
}

export default Portfolio;
