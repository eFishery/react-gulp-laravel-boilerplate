import rootReducer from '../../../js/redux/OrderReducers'
import * as Actions from '../../../js/redux/OrderActions'
import * as ActionTypes from '../../../js/constants/OrderActionTypes'

import expect from 'expect'

describe('OrderReducers', () => {
	// Initial state
	it('should return the initial state', () => {
		expect(
			rootReducer(undefined, {})
		).toEqual(
			{
				orderPageSwitch: {
					sectionNumber: 1,
				},
				orderFeederUpdate: [{
					id: "FeederOne",
					num: 0,
				}]
			}
		)
	})

	// Section Numbers
	it('should increase the section number', () => {
		expect(
			rootReducer({
				orderPageSwitch: {
					sectionNumber: 1,
				},
				orderFeederUpdate: [{
					id: "FeederOne",
					num: 0,
				}]
			}, {
				type: ActionTypes.NEXT_PAGE,
			})
		).toEqual(
			{
				orderPageSwitch: {
					sectionNumber: 2,
				},
				orderFeederUpdate: [{
					id: "FeederOne",
					num: 0,
				}]
			}
		)
	})

	it('should decrease the slide number', () => {
		expect(
			rootReducer({
				orderPageSwitch: {
					sectionNumber: 2,
				},
				orderFeederUpdate: [{
					id: "FeederOne",
					num: 0,
				}]
			}, {
				type: ActionTypes.PREV_PAGE,
			})
		).toEqual(
			{
				orderPageSwitch: {
					sectionNumber: 1,
				},
				orderFeederUpdate: [{
					id: "FeederOne",
					num: 0,
				}]
			}
		)
	})

	it('should do nothing when the section number is about to be decreased below MIN_PAGE', () => {
		expect(
			rootReducer({
				orderPageSwitch: {
					sectionNumber: 1,
				},
				orderFeederUpdate: [{
					id: "FeederOne",
					num: 0,
				}]
			}, {
				type: ActionTypes.PREV_PAGE
			})
		).toEqual(
			{
				orderPageSwitch: {
					sectionNumber: 1,
				},
				orderFeederUpdate: [{
					id: "FeederOne",
					num: 0,
				}]
			}
		)
	})

	it('should do nothing when the section number is about to be increased above MAX_PAGE', () => {
		expect(
			rootReducer({
				orderPageSwitch: {
					sectionNumber: 3,
				},
				orderFeederUpdate: [{
					id: "FeederOne",
					num: 0,
				}]
			}, {
				type: ActionTypes.NEXT_PAGE,
			})
		).toEqual(
			{
				orderPageSwitch: {
					sectionNumber: 3,
				},
				orderFeederUpdate: [{
					id: "FeederOne",
					num: 0,
				}]
			}
		)
	})

	// Order Feeder Update
	it('should increase the feeder count', () => {
		expect(
			rootReducer({
				orderPageSwitch: {
					sectionNumber: 1,
				},
				orderFeederUpdate: [{
					id: "FeederOne",
					num: 0,
				}]
			}, {
				type: ActionTypes.ADD_TO_SUMMARY,
				id: "FeederOne",
				num: 25
			})
		).toEqual(
			{
				orderPageSwitch: {
					sectionNumber: 1,
				},
				orderFeederUpdate: [{
					id: "FeederOne",
					num: 25,
				}]
			}
		)
	})
})