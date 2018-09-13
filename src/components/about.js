import React, { Component } from 'react';

import SVG from './SVG';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="about-me">
          <h2 className="label" id="about">
            ABOUT ME
          </h2>
          <img className="about-me-pic" src={require('../assets/about-me.png')} alt="Jonathan Riggs headshot" />
          <article className="text">
            <strong>
              Hello, I'm Jonathan Riggs, a fullstack web developer mastering the MERN stack. Building elegant solutions
              to unwieldy problems is what fuels my creativity and drives me to produce clean and high performing
              applications. My interests in programming revolve around application performance and efficiency. My
              objective is simply to be the best developer I can be and continue to contribute to the tech industry by
              learning from seasoned developers, remaining humble, and continuously making strides to learn all that I
              can about development. As a firm believer that teamwork is the secret that makes common people achieve
              uncommon results, I can hardly wait to bring all that I have to the table. Feel free to comb through my
              ongoing projects and let me know what you think.
            </strong>
          </article>
        </section>
        <div className="skills-section">
          <h2 className="label" id="skills">
            MY SKILLS
          </h2>
          <SVG filter={'Skills'} />
          <p className="text">
            <strong>and continuing to expand...</strong>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
