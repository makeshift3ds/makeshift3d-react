import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact.jsx';

describe('<Contact />', () => {
  it('should render 1 <Contact /> component', () => {
    const component = shallow(<Contact />);
    expect(component).toHaveLength(1);
  });

  it('should render an article element', () => {
    const component = shallow(<Contact />);
    expect(component.find('article')).toHaveLength(1);
  });

  it('should render an aside element', () => {
    const component = shallow(<Contact />);
    expect(component.find('aside')).toHaveLength(1);
  });

  it('should match snapshot', () => {
    const component = shallow(<Contact />);
    expect(component).toMatchSnapshot();
  });
});
