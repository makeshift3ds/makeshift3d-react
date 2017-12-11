import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero.jsx';

describe('<Hero />', () => {
  it('should render 1 <Hero /> component', () => {
    const wrapper = shallow(<Hero />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render an avatar element', () => {
    const component = shallow(<Hero />);
    expect(component.find('.avatar')).toHaveLength(1);
  });
});
