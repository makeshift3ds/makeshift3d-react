import React from 'react';
import { Markup } from 'interweave';
import 'babel-polyfill';
import './Contact.css';
import Base from '../Base.jsx';

export default class Home extends Base {
  slug = "contact";

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
            <p>I know all the twitters.</p>
            <span> - Ken Elliott</span>
          </div>
        </aside>
      </div>
    );
  }
}
