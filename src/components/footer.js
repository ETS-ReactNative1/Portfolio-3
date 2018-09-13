import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin, faEnvelope, faGithub, faFilePdf);

class Footer extends Component {
  render() {
    return (
      <footer className="footer" role="contentinfo">
        <h2 id="footer">Get In Touch:</h2>
        <section className="contact-info">
          <div className="contact-info-left">
            <a href="mailto:jmriggs75@gmail.com">
              <FontAwesomeIcon icon="envelope" size="4x" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/BuddhaL1T3">
              <FontAwesomeIcon icon={['fab', 'github']} size="4x" />
            </a>
          </div>
          <div className="contact-info-right">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jonathan-riggs-34898476/">
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1G7kycQHbakF1DtBzlFg1a_TKWoG_Pihc2yEhLEtEgdI/edit?usp=sharing"
            >
              <FontAwesomeIcon icon="file-pdf" size="4x" />
            </a>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
