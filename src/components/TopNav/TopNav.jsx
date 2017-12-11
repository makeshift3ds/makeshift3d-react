import React from 'react';
import './TopNav.css';

const TopNav = () => (
  <section className="top">
    <div className="top-container">
      <div className="logo" />
      <ul className="routes-nav">
        <li>
          <a href="#1" aria-label="link to the homepage">
            Home
          </a>
        </li>
        <li>
          <a href="#2" aria-label="link to the blog section">
            Blog
          </a>
        </li>
        <li>
          <a href="#3" aria-label="link to Ken Elliotts resume">
            Resume
          </a>
        </li>
        <li>
          <a href="#4" aria-label="link to the contact form">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default TopNav;
