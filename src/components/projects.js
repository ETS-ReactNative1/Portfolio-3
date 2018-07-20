import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/work.css';
import GSLogo from '../images/GS-logo.png';
import NoCover from '../images/noCover.png';

class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h1 className="col-12">Hello, I'm Jonathan Riggs</h1>
        </div>
        <article className="row">
          <section className="col-6 box">
            <Link to="/projects/gameStrat">
              <img
                className="col-12 box-image"
                src={GSLogo}
                alt="GameStrat logo"
              />
            </Link>
            <div className="col-12 box-content">
              <Link to="/projects/gameStrat">
                <h3>GameStrat</h3>
              </Link>
              <p>Icons for tech stack go here</p>
              <p>
                This app allows users to add strategies to their favorite games.
              </p>
            </div>
          </section>
          <section className="col-6 box">
            <Link className="col-12 box-image" to="/projects/another-app">
              <img className="col-12 box-image" src={NoCover} alt="App logo" />
            </Link>
            <div className="col-12 box-content">
              <Link to="/blank">
                <h3>Project 2</h3>
              </Link>
              <p>Icons for tech stack go here</p>
              <p>Stuff about that app</p>
            </div>
          </section>
        </article>
        <article className="row">
          <section className="col-6 box">
            <Link className="col-12 box-image" to="/projects/another-app">
              <img className="col-12 box-image" src={NoCover} alt="App logo" />
            </Link>
            <div className="col-12 box-content">
              <Link to="/blank">
                <h3>Project 3</h3>
              </Link>
              <p>Icons for tech stack go here</p>
              <p>Stuff about that app</p>
            </div>
          </section>
          <section className="col-6 box">
            <Link className="col-12 box-image" to="/projects/another-app">
              <img className="col-12 box-image" src={NoCover} alt="App logo" />
            </Link>
            <div className="col-12 box-content">
              <Link to="/blank">
                <h3>Project 4</h3>
              </Link>
              <p>Icons for tech stack go here</p>
              <p>Stuff about that app</p>
            </div>
          </section>
        </article>
      </React.Fragment>
    );
  }
}

export default Work;
