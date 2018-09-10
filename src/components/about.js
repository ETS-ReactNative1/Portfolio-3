import React, { Component } from 'react';

import SVG from './SVG';

class About extends Component {
  render() {
    return (
      <section className="about-me" id="about">
        <article>
          <h2>Who I Am:</h2>
          <p>
            <strong>I am me...</strong>
          </p>
        </article>
        <div>
          <h2>My Skills</h2>
          <div className="skills">
            <SVG filter={'Skills'} />
            <span>
              <h2>and continuing to expand...</h2>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
