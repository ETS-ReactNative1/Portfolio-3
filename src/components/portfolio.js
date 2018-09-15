import React, { Component } from 'react';

import Header from './header';
import About from './about';
import ProjectRight from './project-right';
import ProjectLeft from './project-left';
import Footer from './footer';

import { acceptableLosses, gameStrat, cartasContraEspañol } from './project-data';

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <About />
        <section className="projects">
          <h2 className="label" id="projects">
            PROJECTS
          </h2>
          <ProjectRight data={acceptableLosses} />
          <ProjectLeft data={gameStrat} />
          <ProjectRight data={cartasContraEspañol} />
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Portfolio;

// {
//  <svg viewBox="0 0 200 100" preserveAspectRatio="none">
//    <circle fill="white" cx="0" cy="100" r="100" />
//    <circle fill="white" cx="200" cy="100" r="100" />
//  </svg>

//  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
//    <polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
//    <polygon class="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
//  </svg>
// }
