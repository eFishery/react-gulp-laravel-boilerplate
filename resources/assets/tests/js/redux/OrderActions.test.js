import * as OrderActions from '../../../js/redux/OrderActions'
import * as OrderActionTypes from '../../../js/constants/OrderActionTypes'

import expect from 'expect'

describe('OrderActions', () => {
  it('should generate the initial order page', () => {
    const expectedAction = { 
      type: OrderActionTypes.INIT_PAGE
    }

    expect(OrderActions.initPage()).toEqual(expectedAction)
  })

  it('should generate the next page', () => {
    const expectedAction = { 
      type: OrderActionTypes.NEXT_PAGE
    }

    expect(OrderActions.nextPage()).toEqual(expectedAction)
  })

  it('should generate the previous page', () => {
    const expectedAction = { 
      type: OrderActionTypes.PREV_PAGE
    }

    expect(OrderActions.prevPage()).toEqual(expectedAction)
  })
})