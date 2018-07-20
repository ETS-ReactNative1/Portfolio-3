import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/header';
import About from '../components/about';
import Projects from '../components/projects';
import Resume from '../components/resume';
import Footer from '../components/footer';
import GameStrat from '../components/gameStrat';

import '../styles/portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/" component={Header} />
        <main role="main" className="row">
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/gameStrat" component={GameStrat} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
        </main>
        <Route path="/" component={Footer} />
      </React.Fragment>
    );
  }
}

export default Portfolio;
