import React, { Component } from 'react';

import SVG from './SVG';

class About extends Component {
  render() {
    return (
      <section className="about-me" id="about">
        <article>
          <h3>Who I Am:</h3>
          <p>I am me...</p>
        </article>
        <div>
          <h3>My Skills</h3>
          <div className="skills">
            <SVG filter={'Skills'} />
          </div>
          <p>and continuing to expand...</p>
        </div>
      </section>
    );
  }
}

export default About;
