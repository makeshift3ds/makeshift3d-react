import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

/* Components */
import TopNav from '../TopNav/TopNav.jsx';
import Hero from '../Hero/Hero.jsx';
import SocialNav from '../SocialNav/SocialNav.jsx';
import Home from '../Home/Home.jsx';
import Blog from '../Blog/Blog.jsx';
import Contact from '../Contact/Contact.jsx';
import Resume from '../Resume/Resume.jsx';
import Footer from '../Footer/Footer.jsx';

/* CSS */
import '../../assets/css/manifest.css';

const App = () => (
  <Router>
    <div className="app">
      <TopNav />
      <Hero />
      <SocialNav />

      <section className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </section>

      <Footer />
    </div>
  </Router>
);

export default App;
