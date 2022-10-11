import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<App />', () => {
  it('app exists', () => {
    const app = shallow(<App />);
    expect(app.exists());
  });

  it('verifying App-header div', () => {
    const app = shallow(<App />);
    expect(app.contains(<header className='App-header' />));
  });

  it('verifying App-body div', () => {
    const app = shallow(<App />);
    expect(app.contains(<main className='App-body' />));
  });

  it('verifying App-footer div', () => {
    const app = shallow(<App />);
    expect(app.contains(<footer className='App-header' />));
  });
});
