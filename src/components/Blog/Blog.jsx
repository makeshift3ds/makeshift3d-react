import React, { Component } from 'react';
import 'babel-polyfill';

export default class Blog extends Component {
  state = { posts: [] };

  async componentDidMount() {
    try {
      const res = await fetch('http://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      this.setState({ posts });
    } catch (e) {
      console.log('error', e);
    }
  }

  render() {
    return (
      <div className="content-container">
        <article>
          {this.state.posts.length &&
            this.state.posts.map(post => <div key={post.id}>{post.title}</div>)}
        </article>
        <aside>Aside!</aside>
      </div>
    );
  }
}
