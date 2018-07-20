import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/portfolio-footer.css';

class PortfolioFooter extends Component {
  render() {
    return (
      <footer role="contentinfo" className="row">
        <article className="col-12">
          <section className="col-4">
            <h3>About Me</h3>
            <p>Blah</p>
          </section>
          <section className="col-4">
            <h3>Contact Me</h3>
            <p>239.784.2386</p>
            <a href="mailito:jmriggs75@gmail.com">Email Me Here</a>
          </section>
          <section className="col-4">
            <h3>Check Me Out</h3>
            <p>
              <a href="https://github.com/BuddhaL1T3">GitHib</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/jonathan-riggs-34898476/">
                LinkedIn
              </a>
            </p>
            <p>
              <Link to="/resume">Resume</Link>
            </p>
          </section>
        </article>
      </footer>
    );
  }
}

export default PortfolioFooter;
