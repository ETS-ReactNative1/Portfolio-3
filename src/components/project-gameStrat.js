import React, { Component } from 'react';

import landingPage from '../images/landing-page.png';
import login from '../images/login.png';
import search from '../images/search.png';
import game from '../images/game.png';
import strat from '../images/strat.png';
import loginMobile from '../images/login-mobile.png';
import searchMobile from '../images/search-mobile.png';
import gameMobile1 from '../images/game-mobile1.png';
import gameMobile2 from '../images/game-mobile2.png';
import stratMobile from '../images/strat-mobile.png';

class ProjectGameStrat extends Component {
  render() {
    return (
      <div>
        <h2>GameStrat</h2>
        <article className="PGS-intro">
          <ul>
            <li>Looking for a way to beat that one boss?</li>
            <li>Can't seem to pass that one tricky level?</li>
            <li>That one achievement illuding you by a hair?</li>
            <li>Want that competitive edge to get the "W"?</li>
          </ul>
          <p>
            ...Then you have come to the right place! GameStrat is designed to
            allow fellow gamers to share their tricks and hints on how to
            overcome any/all obstacles that you might come up against. Register
            to contribute or feel free to browse and become a better gamer!
          </p>
          <p>
            If you register and become a user, you will be able to contribute to
            the cause. You will now have the following privileges:
          </p>
          <ul>
            <li>Add strategies to your favorite games</li>
            <li>Manage and keep track of all of your strategies</li>

            <li>...more features to come...</li>
          </ul>
          <p>Let the collaboration begin...!</p>
          <h3>
            Below are links to the live app and GitHub Repo for the server side:
          </h3>
          <a href="https://jonathan-gamestrat-client.herokuapp.com/">
            Live App
          </a>
          <a href="https://github.com/thinkful-ei21/Jonathan-GamesStrat-Server">
            Server Repo
          </a>
          <h3>Screenshots of the Game</h3>
          <h4>Desktop View</h4>
          <h5>Landing Page</h5>
          <img src={landingPage} alt="landing page" />
          <h5>Login and Register</h5>
          <img src={login} alt="login" />
          <h5>Game Search</h5>
          <img src={search} alt="search" />
          <h5>Individual Game</h5>
          <img src={game} alt="game" />
          <h5>Individual Strategy</h5>
          <img src={strat} alt="strat" />
          <h4>Mobile View</h4>
          <h5>Login and Register</h5>
          <img src={loginMobile} alt="login mobile" />
          <h5>Game Search</h5>
          <img src={searchMobile} alt="search mobile" />
          <h5>Individual Game</h5>
          <img src={gameMobile1} alt="game mobile top" />

          <img src={gameMobile2} alt="game mobile bottom" />
          <h5>Individual Strategy</h5>
          <img src={stratMobile} alt="strat mobile" />
          <h3>Tech Stack</h3>
          <h4>GameStrat is built using the following:</h4>
          <ul>
            <li>HTML5</li>
            <li>Cascading Style Sheet/Flex Box</li>
            <li>JavaScript</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
          </ul>
          <h5>Client-Side</h5>
          <ul>
            <li>React</li>
            <li>React Redux</li>
            <li>Redux From</li>
            <li>Redux Thunk</li>
            <li>JWT-Decode</li>
          </ul>
          <h5>Server-Side</h5>
          <ul>
            <li>Express</li>
            <li>Mongoose</li>
            <li>Morgan</li>
            <li>Passport</li>
            <li>JSONWedToken</li>
            <li>bcryptjs</li>
          </ul>
          <h4>Project's Key Parts Locations</h4>
          <h5>Client-Side</h5>
          <ul>
            <li>Actions</li>
            <li>Components </li>
            <li>Local Storage</li>
            <li>Reducers</li>
            <li>Store</li>
            <li>Styles</li>
            <li>Tests</li>
            <li>Validators</li>
          </ul>
          <h5>Server-Side</h5>
          <ul>
            <li>Models</li>
            <li>Passport</li>
            <li>Routes</li>
            <li>Tests</li>
            <li>Server - (index.js)</li>
          </ul>
          <h4>Dev Setup:</h4>
          <ol>
            <li>
              Clone both reops: the
              <a href="https://github.com/thinkful-ei21/Jonathan-GamesStrat-Client">
                client side
              </a>
              and the
              <a href="https://github.com/thinkful-ei21/Jonathan-GamesStrat-Server">
                server side
              </a>
            </li>
            <li>
              Once you have them cloned, run `npm install` on both in order to
              get all dependancies.
            </li>
          </ol>
        </article>
      </div>
    );
  }
}

export default ProjectGameStrat;
