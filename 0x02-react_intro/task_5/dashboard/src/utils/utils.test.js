import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import { strict as test } from 'assert';
describe('Test Utils', () => {
  it('checking if year is correct', () => {
    test.equal(getFullYear(), 2020);
  });

  it('checking if school is correct', () => {
    test.equal(getFooterCopy(true), 'Holberton School True');
  });

  it('checking if dashboard is correct', () => {
    test.equal(getFooterCopy(false), 'Holberton School False');
  });

  it('checking notifications', () => {
    test.equal(getLatestNotification(), 'Updating Notification banner');
  });
});
