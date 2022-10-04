import {strict as assert} from 'assert'
import { getFullYear, getFooterCopy, getLatestNotification } from './utils'

describe('Test that in Utils', () => {
	it('getFullYear returns the correct year', () => {
		assert.equal(getFullYear(), 2021)
	})
	it('getFooterCopy has the correct value if true', () => {
		assert.equal(getFooterCopy(true), 'Holberton School')
	})
	it('getFooterCopy has the correct value if false', () => {
		assert.equal(getFooterCopy(false), 'Holberton School main dashboard')
	})
	it('getLatestNotification has the correct value', () => {
		assert.equal(getLatestNotification(), '<strong>Urgent requirement</strong> - complete by EOD')
	})
})