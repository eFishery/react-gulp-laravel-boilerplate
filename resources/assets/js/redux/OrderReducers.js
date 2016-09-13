import * as OrderActionTypes from '../constants/OrderActionTypes'
import * as OrderStateTypes from '../constants/OrderStateTypes'
import { combineReducers } from 'redux'

const pageNumberState = {
  sectionNumber: 1
}

const feederSectionState = [{
  id: "FeederOne",
  num: parseInt(0)
}]

function orderPageSwitch(state = pageNumberState, action) {
  switch (action.type) {
    case OrderActionTypes.NEXT_PAGE:
      if (state.sectionNumber < OrderStateTypes.MAX_PAGE) {
        return Object.assign({}, state, {
          sectionNumber: state["sectionNumber"] + 1
        });
      }
      else {
        return state;
      }
      break;
    case OrderActionTypes.PREV_PAGE:
      if (state.sectionNumber > OrderStateTypes.MIN_PAGE) {
        return Object.assign({}, state, {
          sectionNumber: state["sectionNumber"] - 1
        })
      }
      else {
        return state;
      }
      break;
    case OrderActionTypes.INIT_PAGE:
      return Object.assign({}, state, {
        sectionNumber: 1
      })
      break;
    case OrderActionTypes.CHECKOUT_ORDER:
      return Object.assign({}, state, {
        sectionNumber: 1
      })
      break;
    default:
      return state
  }
}

function orderFeederUpdate(state = feederSectionState, action) {
  switch (action.type) {
    case OrderActionTypes.ADD_TO_SUMMARY:
      return Object.assign([{}], state, [{
        id: action.id,
        num: parseInt(action.num)
      }]);
      break;
    case OrderActionTypes.CHECKOUT_ORDER:
      return Object.assign([{}], state, [{
        id: "FeederOne",
        num: parseInt(0)
      }]);
      break;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  orderPageSwitch, 
  orderFeederUpdate
})

export default rootReducer