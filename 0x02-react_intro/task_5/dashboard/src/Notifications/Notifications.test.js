import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<Notifications />', () => {
  it('Notification center exists', () => {
    const app = shallow(<Notifications />);
    expect(app.exists());
  });

  it('verifying list items', () => {
    const app = shallow(<Notifications />);
    expect(app.find('li')).toHaveLength(3);
  });

  it('verifying App-body div', () => {
    const app = shallow(<Notifications />);
    expect(app.find('p').first().text()).to.equal('Here is the list of notifications');
  });
});
