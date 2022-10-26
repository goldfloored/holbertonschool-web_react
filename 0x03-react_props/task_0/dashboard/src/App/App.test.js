import { shallow } from 'enzyme';
import App from './App';
import React from 'react';

describe('<App />', () => {
  it('render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
});
