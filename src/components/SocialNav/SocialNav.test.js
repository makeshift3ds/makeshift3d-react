import React from 'react';
import { shallow } from 'enzyme';
import SocialNav from './SocialNav.jsx';

describe('<SocialNav />', () => {
  it('should render 1 <SocialNav /> component', () => {
    const wrapper = shallow(<SocialNav />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render a social-nav element', () => {
    const component = shallow(<SocialNav />);
    expect(component.find('.social-nav')).toHaveLength(1);
  });

  it('should match snapshot', () => {
    const component = shallow(<SocialNav />);
    expect(component).toMatchSnapshot();
  });
});
