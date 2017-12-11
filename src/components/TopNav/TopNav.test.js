import React from 'react';
import { shallow } from 'enzyme';
import TopNav from './TopNav.jsx';

describe('<TopNav />', () => {
  it('should render 1 <TopNav /> component', () => {
    const component = shallow(<TopNav />);
    expect(component).toHaveLength(1);
  });

  it('should render routes nav', () => {
    const component = shallow(<TopNav />);
    expect(component.find('ul.routes-nav')).toHaveLength(1);
  });

  it('should match snapshot', () => {
    const component = shallow(<TopNav />);
    expect(component).toMatchSnapshot();
  });
});
