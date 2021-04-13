import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import useBurger from '../hooks/useBurger';

const Hero = () => {
  useBurger();

  return (
    <section className="hero is-primary">
      <div className="hero-head">
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="container">
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item" onClick={() => scrollTo('#about')}>
                  About
                </a>
                <a className="navbar-item" onClick={() => scrollTo('#research')}>
                  Research
                </a>
                <a className="navbar-item" onClick={() => scrollTo('#publications')}>
                  Publications
                </a>
                <a className="navbar-item" onClick={() => scrollTo('#events')}>
                  Events
                </a>
                <a className="navbar-item" onClick={() => scrollTo('#contact')}>
                  Contact
                </a>
              </div>
            </div>
          </div>
          <a role="button" className="navbar-burger" aria-label="menu" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">
          <p className="title is-1">
            Susan Christine Massey, PhD
          </p>
          <p className="subtitle">
            Dr Mathy
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
