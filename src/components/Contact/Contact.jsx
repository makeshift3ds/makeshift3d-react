import React from 'react';
import { Markup } from 'interweave';
import 'babel-polyfill';
import './Contact.css';

export default class Home extends React.Component {
  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:3000/pages/contact');
      const page = await res.json();
      this.setState({
        page,
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  state = {
    page: {},
  };

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
