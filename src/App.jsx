import React from 'react';
import { getYear } from 'date-fns';
import './assets/css/manifest.css';

let currentYear = getYear(Date.now());

const App = () => (
  <div className="app">
    <div>Ken Elliott</div>
    <nav className="routes">
      <ul>
        <li>
          <a href="#1">Home</a>
        </li>
        <li>
          <a href="#2">Blog</a>
        </li>
        <li>
          <a href="#3">Resume</a>
        </li>
        <li>
          <a href="#4">Contact</a>
        </li>
      </ul>
    </nav>

    <section className="hero">
      <div className="avatar">Me</div>
      <nav className="social">
        <ul>
          <li>
            <a href="#github">github</a>
          </li>
          <li>
            <a href="#linked">linkedin</a>
          </li>
          <li>
            <a href="#twitter">twitter</a>
          </li>
          <li>
            <a href="#youtube">youtube</a>
          </li>
        </ul>
      </nav>
    </section>

    <article className="content">
      <h1>Home</h1>
    </article>

    <footer>
      <div>Copyright &copy;{currentYear}</div>
    </footer>
  </div>
);

export default App;
