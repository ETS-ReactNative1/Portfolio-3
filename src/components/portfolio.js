import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import PortfolioHeader from '../components/portfolio-header';
import About from '../components/about';
import Play from '../components/play';
import Work from '../components/work';
import Resume from '../components/resume';
import PortfolioFooter from '../components/portfolio-footer';
import ProjectGameStrat from '../components/project-gameStrat';

import '../styles/portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Route path="/" component={PortfolioHeader} />
        <main role="main" className="portfolio-main">
          <Route exact path="/work" component={Work} />
          <Route exact path="/work/gameStrat" component={ProjectGameStrat} />
          <Route exact path="/play" component={Play} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
        </main>
        <Route path="/" component={PortfolioFooter} />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   location: state.navRed.location
// });
// connect(mapStateToProps)
export default Portfolio;
