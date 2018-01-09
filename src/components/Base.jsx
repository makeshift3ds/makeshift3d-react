import React from 'react';
import { Markup } from 'interweave';
import 'babel-polyfill';

export default class Base extends React.Component {
  async componentDidMount() {
    try {
      let page = localStorage.getItem(this.slug);

      page = null;

      if (page) {
        page = JSON.parse(page);
      } else {
        const res = await fetch(`${process.env.API_URL}/pages/${this.slug}`);
        page = await res.json();
        localStorage.setItem(this.slug, JSON.stringify(page));
      }

      this.setState({
        page,
      });
    } catch (e) {
      console.log('error', e);
    }
  }

  slug = '';

  state = {
    page: {},
  };
}
