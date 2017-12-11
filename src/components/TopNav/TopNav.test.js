import React from 'react';
import { shallow } from 'enzyme';
import TopNav from './TopNav.jsx';

describe('<TopNav />', () => {
  it('should render 1 <TopNav /> component', () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render routes nav', () => {
    const component = shallow(<TopNav />);
    expect(component.find('ul.routes-nav')).toHaveLength(1);
  });
});
