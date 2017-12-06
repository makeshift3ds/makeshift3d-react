import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('<App />', () => {
  it('should render 1 <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});
