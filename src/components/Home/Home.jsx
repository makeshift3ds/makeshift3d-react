import React from 'react';
import './Home.css';

/* polyfill for async await */
import BabelPolyfill from 'babel-polyfill';

export default class Home extends React.Component {
  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:3000/pages/foobar');
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
          <p dangerouslySetInnerHTML={{ __html: body }} />
        </article>
        <aside>
          <div className="aside-block">
            <p>This guy codes!</p>
            <span> - Random Redditor</span>
          </div>
        </aside>
      </div>
    );
  }
}

