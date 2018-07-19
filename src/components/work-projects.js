import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/work-projects.css';

class WorkProjects extends Component {
  render() {
    return (
      <div className="work-projects">
        <article className="work-projects-intro">
          Work Projects Go Here!
        </article>
        <div className="WP-list">
          <Link to="/work/gameStrat">GameStrat</Link>
        </div>
      </div>
    );
  }
}

export default WorkProjects;
