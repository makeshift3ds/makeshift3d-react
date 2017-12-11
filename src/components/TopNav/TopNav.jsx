import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => (
  <section className="top">
    <div className="top-container">
      <div className="logo" />
      <ul className="routes-nav">
        <li>
          <Link to="/" aria-label="link to the homepage">
            Home
          </Link>
        </li>
        <li>
          <Link to="/blog" aria-label="link to the blog section">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/resume" aria-label="link to Ken Elliott's resume">
            Resume
          </Link>
        </li>
        <li>
          <Link to="/contact" aria-label="link to the contact form">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default TopNav;
