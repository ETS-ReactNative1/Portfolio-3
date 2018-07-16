import React, { Component } from 'react';

import PortfolioHeader from '../components/portfolio-header';
import ProjectSection from '../components/project-section';

import '../styles/portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <PortfolioHeader />
        <main role="main" className="portfolio-main">
          <ProjectSection />
        </main>
      </div>
    );
  }
}

export default Portfolio;
