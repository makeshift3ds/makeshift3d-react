import React from 'react';
/* Components */
import TopNav from '../TopNav/TopNav.jsx';
import Hero from '../Hero/Hero.jsx';
import SocialNav from '../SocialNav/SocialNav.jsx';
import Home from '../Home/Home.jsx';
import Footer from '../Footer/Footer.jsx';

/* CSS */
import '../../assets/css/manifest.css';

const App = () => (
  <div className="app">
    <TopNav />
    <Hero />
    <SocialNav />

    <section className="content">
      <Home />
    </section>

    <Footer />
  </div>
);

export default App;
