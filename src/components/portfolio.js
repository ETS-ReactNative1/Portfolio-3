import React, { Component } from "react";

import Header from "./header";
import About from "./about";
import ProjectRight from "./project-right";
import ProjectLeft from "./project-left";
import Footer from "./footer";

import {
  acceptableLosses,
  gameStrat,
  cartasContraEspañol,
} from "./project-data";

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
