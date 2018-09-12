import React, { Component } from 'react';

import SVG from './SVG';

class About extends Component {
  render() {
    return (
      <section className="about-me">
        <h2 className="label" id="about">
          About Me
        </h2>
        <article>
          <p className="text">
            <strong>
              Hello, I'm Jonathan Riggs, a fullstack web developer mastering the MERN stack. Building elegant solutions
              to unwieldy problems is what fuels my creativity and drives me to produce clean and high performing
              applications. My interests in programming revolve around application performance and efficiency. Feel free
              to comb through my ongoing projects.
            </strong>
          </p>
        </article>
        <div>
          <h2>My Skills</h2>
          <SVG filter={'Skills'} />
          <p className="text">
            <strong>and continuing to expand...</strong>
          </p>
        </div>
      </section>
    );
  }
}

export default About;
