import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home.jsx';

describe('<Home />', () => {
  it('should render 1 <Home /> component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render an article element', () => {
    const component = shallow(<Home />);
    expect(component.find('article')).toHaveLength(1);
  });

  it('should render an aside element', () => {
    const component = shallow(<Home />);
    expect(component.find('aside')).toHaveLength(1);
  });

  it('should match snapshot', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });
});
