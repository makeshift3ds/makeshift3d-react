import React from 'react';
import { shallow } from 'enzyme';
import Blog from './Blog.jsx';

describe('<Blog />', () => {
  it('should render 1 <Blog /> component', () => {
    const component = shallow(<Blog />);
    expect(component).toHaveLength(1);
  });
});
