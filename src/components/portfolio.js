import React, { Component } from 'react';
import PortfolioHeader from '../components/portfolio-header';
import '../styles/portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <PortfolioHeader />
        <main role="main" className="portfolio-main">
          <p className="portfolio-intro">ABOUT ME</p>
        </main>
      </div>
    );
  }
}

export default Portfolio;
