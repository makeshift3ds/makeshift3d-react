import React from 'react';
import { getYear } from 'date-fns';

/* Components */
import TopNav from '../TopNav/TopNav.jsx';
import Hero from '../Hero/Hero.jsx';
import SocialNav from '../SocialNav/SocialNav.jsx';
import Home from '../Home/Home.jsx';

/* CSS */
import '../../assets/css/manifest.css';

let currentYear = getYear(Date.now());

const App = () => (
  <div className="app">
    <TopNav />
    <Hero />
    <SocialNav />

    <section className="content">
      <Home />
    </section>

    <footer>
      <div>Copyright &copy;{currentYear}</div>
    </footer>
  </div>
);

export default App;
