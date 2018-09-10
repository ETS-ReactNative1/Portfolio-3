import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin, faEnvelope, faGithub);

class Footer extends Component {
  render() {
    return (
      <footer className="footer" id="footer" role="contentinfo">
        <h2>Get In Touch:</h2>
        <section className="contact-info">
          <span className="phone">239.784.2386</span>
          <a href="mailto:jmriggs75@gmail.com">
            <FontAwesomeIcon icon="envelope" size="4x" />
            {/* <img className="contact-thumbnail" src={require('../assets/contact/mail.svg')} alt="Mail logo" /> */}
          </a>
          <a href="https://github.com/BuddhaL1T3">
            <FontAwesomeIcon icon={['fab', 'github']} size="4x" />
            {/* <img className="footer-contact-thumbnail" src={require('../assets/contact/gitHub.svg')} alt="GitHub logo" /> */}
          </a>
          <a href="https://www.linkedin.com/in/jonathan-riggs-34898476/">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" />

            {/* <img src={require('../assets/contact/linkedIn.svg')} alt="LinkedIn logo" /> */}
          </a>
        </section>
      </footer>
    );
  }
}

export default Footer;
