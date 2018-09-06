import InlineSVG from 'svg-inline-react';
import React, { Component } from 'react';
const { SVG } = require('./SVG');

// import '../styles/work.css';

// to do...
// create a hamburger menu for the links for mobile
// tweak header layout for mobile

class JonathanRiggs extends Component {
  render() {
    const {
      HTML,
      CSSSVG,
      JS,
      NodeJS,
      Express,
      ReactSVG,
      MongoDB,
      JQuery,
      Mocha,
      Git,
      Heroku,
      GitHub,
      ES6,
      TravisCI,
      NPM
    } = SVG;
    return (
      <React.Fragment>
        <header role="banner" className="header-bar">
          <img className="logo" src={require('../assets/JR-logo.svg')} alt="logo" />
          <div className="header-title">
            <h1>Jonathan Riggs</h1>
            <h3> | Full Stack Developer</h3>
          </div>
          <nav className="nav-links">
            <a href="https://github.com/BuddhaL1T3">
              <img className="contact-thumbnail GH" src={require('../assets/contact/gitHub.svg')} alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-riggs-34898476/">
              <img
                className="contact-thumbnail LI"
                src={require('../assets/contact/linkedIn.svg')}
                alt="LinkedIn logo"
              />
            </a>
            <a href="mailto:jmriggs75@gmail.com">
              <img className="contact-thumbnail M" src={require('../assets/contact/mail.svg')} alt="Mail logo" />
            </a>
          </nav>
        </header>

        <section className="about-me">
          <article>
            <h3>Who I Am:</h3>
            <p>I am me...</p>
          </article>
          <div>
            <h3>My Skills</h3>
            <div className="skills">
              {/* HTML */}
              <InlineSVG src={HTML} />
              {/* CSS */}
              <InlineSVG src={CSSSVG} />
              {/* JS */}
              <InlineSVG src={JS} />
              {/* NodeJS */}
              <InlineSVG src={NodeJS} />
              {/* Express */}
              <InlineSVG src={Express} />
              {/* React */}
              <InlineSVG src={ReactSVG} />
              {/* Redux */}
              REDUX
              {/* MongoDB */}
              <InlineSVG src={MongoDB} />
              {/* JQuery */}
              <InlineSVG src={JQuery} />
              {/* Mocha */}
              <InlineSVG src={Mocha} />
              {/* Git */}
              <InlineSVG src={Git} />
              {/* Heroku */}
              <InlineSVG src={Heroku} />
              {/* GitHub */}
              <InlineSVG src={GitHub} />
              {/* ES6 */}
              <InlineSVG src={ES6} />
              {/* TravisCI */}
              <InlineSVG src={TravisCI} />
              {/* NPM */}
              <InlineSVG src={NPM} />
            </div>
            <p>and continuing to expand...</p>
          </div>
        </section>

        <section className="projects">
          <section className="project" to="/JonathanRiggs/gameStrat">
            <div className="project-img">
              <img
                className="project-thumbnail"
                src={require('../assets/gameStrat/GS-logo.png')}
                alt="GameStrat logo"
              />
            </div>
            <article className="project-info">
              <div className="project-details">
                <p className="project-title">Acceptable Losses</p>
                <div className="tech-stack">TECKSTACK</div>
                <hr className="description-divider" />
                <p className="description">This is a XXXXXXXXXX XXXXX XXXXXXXX XXX X XXXXXXX XXXXXXX XXX Bill App</p>
              </div>
              <div className="project-links">
                <a className="link" href="https://acceptable-losses-client.herokuapp.com/">
                  Live App
                </a>
                <div>
                  <a className="link" href="https://github.com/thinkful-ei21/acceptable-losses-client">
                    GitHub(Client)
                  </a>
                  <span> | </span>
                  <a className="link" href="https://github.com/thinkful-ei21/acceptable-losses-server">
                    GitHub(Server)
                  </a>
                </div>
              </div>
            </article>
          </section>

          <section className="project" to="/JonathanRiggs/gameStrat">
            <article className="project-info">
              <div className="project-details">
                <p className="project-title">GameStrat</p>
                <div className="tech-stack">TECKSTACK</div>
                <hr className="description-divider" />
                <p className="description">
                  This XXXXXXXXXX XXXXX XXXXXXXX XXX X XXXXXXX XXXXXXX XXX app allows users to add strategies to their
                  favorite games.
                </p>
              </div>
              <div className="project-links">
                <a className="link" href="https://jonathan-gamestrat-client.herokuapp.com/">
                  Live App
                </a>
                <div>
                  <a className="link" href="https://github.com/thinkful-ei21/Jonathan-GamesStrat-Client">
                    GitHub(Client)
                  </a>
                  <span> | </span>
                  <a className="link" href="https://github.com/thinkful-ei21/Jonathan-GamesStrat-Server">
                    GitHub(Server)
                  </a>
                </div>
              </div>
            </article>
            <div className="project-img">
              <img
                className="project-thumbnail"
                src={require('../assets/gameStrat/GS-logo.png')}
                alt="GameStrat logo"
              />
            </div>
          </section>
        </section>
        <section className="projects">
          <section className="project" to="/JonathanRiggs/gameStrat">
            <div className="project-img">
              <img
                className="project-thumbnail"
                src={require('../assets/gameStrat/GS-logo.png')}
                alt="GameStrat logo"
              />
            </div>
            <article className="project-info">
              <div className="project-details">
                <p className="project-title">Cartas Contra Español</p>
                <div className="tech-stack">TECKSTACK</div>
                <hr className="description-divider" />
                <p className="description">
                  This XXXXXXXXXX XXXXX XXXXXXXX XXX X XXXXXXX XXXXXXX XXX app allows users to add strategies to their
                  favorite games.
                </p>
              </div>
              <div className="project-links">
                <a className="link" href="https://sr-app-sj.herokuapp.com/">
                  Live App
                </a>
                <div>
                  <a className="link" href="https://github.com/BuddhaL1T3/spaced-rep-client-sonya-jonathan">
                    GitHub(Client)
                  </a>
                  <span> | </span>
                  <a className="link" href="https://github.com/BuddhaL1T3/spaced-rep-server-sonya-jonathan">
                    GitHub(Server)
                  </a>
                </div>
              </div>
            </article>
          </section>

          <section className="project" to="/JonathanRiggs/gameStrat">
            <article className="project-info">
              <div className="project-details">
                <p className="project-title">Bookmarks</p>
                <div className="tech-stack">TECKSTACK</div>
                <hr className="description-divider" />
                <p className="description">
                  This XXXXXXXXXX XXXXX XXXXXXXX XXX X XXXXXXX XXXXXXX XXX app allows users to add strategies to their
                  favorite games.
                </p>
              </div>
              <div className="project-links">
                <a className="link" href="https://jonathan-gamestrat-client.herokuapp.com/">
                  Live App
                </a>
                <div>
                  <a className="link" href="https://github.com/thinkful-ei21/Jonathan-GamesStrat-Client">
                    GitHub(Client)
                  </a>
                  <span> | </span>
                  <a className="link" href="https://github.com/thinkful-ei21/Jonathan-GamesStrat-Server">
                    GitHub(Server)
                  </a>
                </div>
              </div>
            </article>
            <div className="project-img">
              <img
                className="project-thumbnail"
                src={require('../assets/gameStrat/GS-logo.png')}
                alt="GameStrat logo"
              />
            </div>
          </section>
        </section>

        <footer className="footer" role="contentinfo">
          <h3>Get In Touch:</h3>
          <section className="contact-info">
            <span>239.784.2386</span>
            <a href="mailto:jmriggs75@gmail.com">
              <img className="contact-thumbnail" src={require('../assets/contact/mail.svg')} alt="Mail logo" />
            </a>
            <a href="https://github.com/BuddhaL1T3">
              <img
                className="footer-contact-thumbnail"
                src={require('../assets/contact/gitHub.svg')}
                alt="GitHub logo"
              />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-riggs-34898476/">
              <img
                className="footer-contact-thumbnail"
                src={require('../assets/contact/linkedIn.svg')}
                alt="LinkedIn logo"
              />
            </a>
          </section>
        </footer>
      </React.Fragment>
    );
  }
}

export default JonathanRiggs;
