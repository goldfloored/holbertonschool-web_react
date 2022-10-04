import App from './App'
import { shallow, render } from 'enzyme';
import React from 'react';


const checkClass = (className) => {
  const wrapper = render(<App />);
  const children = wrapper['0'].children;
  let element = undefined;
  children.forEach(child => {
      if(className === child.attribs.class) {
        element = child;
        return;
      }
  });
  return element;
};

describe('App header class', () => {
  it('has App-header', () => {
    const node = checkClass('App-header');
          expect(node.name).toBe('div');
          expect(node.attribs.class).toBe('App-header');
  });
});

describe('App body class', () => {
  it('has App-body', () => {
      const node = checkClass('App-body');
      expect(node.name).toBe('div');
      expect(node.attribs.class).toBe('App-body');
  });
});

describe('App footer class', () => {
  it('has App-footer', () => {
      const node = checkClass('App-footer');
      expect(node.name).toBe('div');
      expect(node.attribs.class).toBe('App-footer');
  });
});