import React from 'react';
import publications from '../../data/publications.yml';

const Publications = () => (
  <section id="publications" className="section">
    <div className="container">
      <h2 className="title">Publications</h2>
      <p className="subtitle">
        A selection of peer-reviewed and recently submitted (under review) articles - a full publication listing can be found on my google scholar page.
      </p>
      <div className="content">
        {publications.content.map((publication) => (
          <div className="card mb-1" key={publication.title}>
            <div className="card-content">
              <div className="media">
                <a className="media-content" href={publication.link} target="_blank">
                  <p className="title is-5">{publication.title}</p>
                  <p className="subtitle is-6 mb-0 mt-1">{publication.journal}</p>
                </a>
                <div className="media-right">
                  <time>{publication.year}</time>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Publications;
