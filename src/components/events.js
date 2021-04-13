import React from 'react';
import events from '../../data/events.yml';

const Events = () => (
  <section id="events" className="section">
    <div className="container">
      <h2 className="title">Events</h2>
      <p className="subtitle">
        I enjoy sharing my work - you may find me at one of these upcoming events! Additionally, you may look back through previous events I’ve presented at to find slides and other related resources.
      </p>
      <div className="content">
        {events.content.map((event) => {
          const eventDate = new Date(event.date);

          return (
            <div className="card mb-1" key={event.title}>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="subtitle">
                      {eventDate.toLocaleDateString('en-us', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                    <h3 className="title mt-1 is-5">{event.title}</h3>
                    <div className="content">
                      <p>{event.description}</p>
                    </div>
                    {event.resources && (
                      <>
                        <p className="subtitle is-6 has-text-weight-bold">Resources</p>
                        <div className="content">
                          {event.resources.map((resource) => (
                            <div>
                              <a href={resource.url} target="_blank">
                                {resource.title}
                              </a>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Events;
