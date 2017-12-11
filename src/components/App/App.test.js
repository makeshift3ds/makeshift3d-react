import React from 'react';
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('<App />', () => {
  it('should render 1 <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });
});
