import React, { Component } from 'react';

import PlayProjects from '../components/play-projects';

import '../styles/play.css';

class Play extends Component {
  render() {
    return (
      <div className="play">
        <p className="play-intro">Play Page</p>
        <PlayProjects />
      </div>
    );
  }
}

export default Play;
