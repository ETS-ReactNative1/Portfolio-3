import React, { Component } from 'react';

import WorkProjects from '../components/work-projects';

import '../styles/work.css';

class Work extends Component {
  render() {
    return (
      <div className="work">
        <p className="work-intro">Work Page</p>
        <WorkProjects />
      </div>
    );
  }
}

export default Work;
