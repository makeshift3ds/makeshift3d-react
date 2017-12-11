import React from 'react';
import { getYear } from 'date-fns';

/* Components */
import TopNav from '../TopNav/TopNav.jsx';
import Hero from '../Hero/Hero.jsx';
import SocialNav from '../SocialNav/SocialNav.jsx';

/* CSS */
import '../../assets/css/manifest.css';

let currentYear = getYear(Date.now());

const App = () => (
  <div className="app">
    <TopNav />
    <Hero />
    <SocialNav />

    <section className="content">
      <div className="content-container">
        <article>
          <h1>Home</h1>
          <p>This is some stuff about me</p>
        </article>
        <aside>
          <div className="aside-block">
            <p>This guy codes!</p>
            <span> - Random Redditor</span>
          </div>
        </aside>
      </div>
    </section>

    <footer>
      <div>Copyright &copy;{currentYear}</div>
    </footer>
  </div>
);

export default App;
