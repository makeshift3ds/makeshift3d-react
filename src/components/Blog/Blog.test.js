import React from 'react';
import { shallow } from 'enzyme';
import Blog from './Blog.jsx';

const mockFetch = () =>
  new Promise(resolve => {
    resolve({
      json() {
        return [{ id: 1, title: 'foo' }];
      }
    });
  });

describe('<Blog />', () => {
  it('should render 1 <Blog /> component', () => {
    const component = shallow(<Blog />);
    expect(component).toHaveLength(1);
  });

  it('should have an empty array as a default state', () => {
    const component = shallow(<Blog />);
    expect(component.state().posts).toEqual([]);
  });

  it('should call fetch to get posts', () => {
    global.fetch = jest.fn().mockImplementation(mockFetch);
    shallow(<Blog />);
    expect(global.fetch).toBeCalledWith('http://jsonplaceholder.typicode.com/posts');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
