import React from 'react';

const Footer = () => (
  <footer className="footer has-background-primary has-text-light">
    <div className="content has-text-centered">
      <p>
        © {new Date().getFullYear()}, Susan Massey
      </p>
    </div>
  </footer>
);

export default Footer;
