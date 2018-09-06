import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer" id="footer" role="contentinfo">
        <h2>Get In Touch:</h2>
        <section className="contact-info">
          <span className="phone">239.784.2386</span>
          <a href="mailto:jmriggs75@gmail.com">
            <img className="contact-thumbnail" src={require('../assets/contact/mail.svg')} alt="Mail logo" />
          </a>
          <a href="https://github.com/BuddhaL1T3">
            <img className="footer-contact-thumbnail" src={require('../assets/contact/gitHub.svg')} alt="GitHub logo" />
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
    );
  }
}

export default Footer;
