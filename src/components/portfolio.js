import React, { Component } from 'react';

import Header from './header';
import About from './about';
import ProjectRight from './project-right';
import ProjectLeft from './project-left';
import Footer from './footer';

import { acceptableLosses, gameStrat, cartasContraEspañol } from './prroject-data';

// import '../styles/work.css';

// to do...
// create a hamburger menu for the links for mobile
// tweak header layout for mobile
//

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <About />
        <section className="projects" id="projects">
          <ProjectRight data={acceptableLosses} />
          <ProjectLeft data={gameStrat} />
          <ProjectRight data={cartasContraEspañol} />
        </section>
        <Footer />

        {/* <section className="project">
            <div className="project-img">
              <img
                className="project-thumbnail"
                src={require('../assets/gameStrat/GS-logo.png')}
                alt="GameStrat logo"
              />
            </div>
            <article className="project-info">
              <div className="project-details">
                <p className="project-title">Cartas Contra Español</p>
                <div className="tech-stack">
                  <SVG filter={'Cartas Contra Español'} />
                </div>
                <hr className="description-divider" />
                <p className="description">
                  This XXXXXXXXXX XXXXX XXXXXXXX XXX X XXXXXXX XXXXXXX XXX app allows users to add strategies to their
                  favorite games.
                </p>
              </div>
              <div className="project-links">
                <a className="link" href="https://sr-app-sj.herokuapp.com/">
                  Live App
                </a>
                <div>
                  <a className="link" href="https://github.com/BuddhaL1T3/spaced-rep-client-sonya-jonathan">
                    Client
                  </a>
                  <span> | </span>
                  <a className="link" href="https://github.com/BuddhaL1T3/spaced-rep-server-sonya-jonathan">
                    Server
                  </a>
                </div>
              </div>
            </article>
          </section> */}
      </React.Fragment>
    );
  }
}

export default Portfolio;
