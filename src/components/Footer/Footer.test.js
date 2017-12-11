import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer.jsx';

describe('<Footer />', () => {
  it('should render 1 <Footer /> component', () => {
    const component = shallow(<Footer />);
    expect(component).toHaveLength(1);
  });

  it('should render an copyright element', () => {
    const component = shallow(<Footer />);
    expect(component.find('.copyright')).toHaveLength(1);
  });

  it('should match snapshot', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});
