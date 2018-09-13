import React, { Component } from 'react';
import SVG from './SVG';

class ProjectLeft extends Component {
  render() {
    const { title, img, description, links } = this.props.data;
    return (
      <section className="project left">
        <article className="project-info">
          <div className="project-details">
            <h1 className="project-title">{title}</h1>
            <div className="tech-stack">
              <SVG filter={title} />
            </div>
            <hr className="description-divider" />
            <p className="description">{description}</p>
          </div>
          <div className="project-links">
            <a className="link" href={links.live}>
              Live App
            </a>
            <div>
              <a className="link" href={links.client}>
                Client
              </a>
              <span> | </span>
              <a className="link" href={links.server}>
                Server
              </a>
            </div>
          </div>
        </article>
        <div className="project-img">
          <img className="project-thumbnail" src={img.src} alt={img.alt} />
        </div>
      </section>
    );
  }
}

export default ProjectLeft;
