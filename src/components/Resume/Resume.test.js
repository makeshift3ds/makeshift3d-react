import React from 'react';
import { shallow } from 'enzyme';
import Resume from './Resume.jsx';

describe('<Resume />', () => {
  it('should render 1 <Resume /> component', () => {
    const component = shallow(<Resume />);
    expect(component).toHaveLength(1);
  });

  it('should render an article element', () => {
    const component = shallow(<Resume />);
    expect(component.find('article')).toHaveLength(1);
  });

  it('should render an aside element', () => {
    const component = shallow(<Resume />);
    expect(component.find('aside')).toHaveLength(1);
  });

  it('should match snapshot', () => {
    const component = shallow(<Resume />);
    expect(component).toMatchSnapshot();
  });
});
