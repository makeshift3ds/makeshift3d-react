import React from 'react';
import { Markup } from 'interweave';
import 'babel-polyfill';
import './Home.css';
import Base from '../Base.jsx';

export default class Home extends Base {
  slug = 'home';

  render() {
    const { title, body } = this.state.page;

    return (
      <div className="content-container">
        <article>
          <h1>{title}</h1>
          <Markup content={body} tag="div" />
        </article>
        <aside>
          <div className="aside-block">
            <p>This guy codes!</p>
            <span> - Random Redditor</span>
          </div>
          <div className="aside-block">
            <p>I use PERL to write code that no one understands.</p>
            <span> - Ken Elliott</span>
          </div>
        </aside>
      </div>
    );
  }
}

