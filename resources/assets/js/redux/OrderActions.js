import * as OrderActionTypes from '../constants/OrderActionTypes';

// Action creators

function nextPage() {
  return {
    type: OrderActionTypes.NEXT_PAGE
  };
}

function prevPage() {
  return {
    type: OrderActionTypes.PREV_PAGE
  };
}

function initPage() {
  return {
    type: OrderActionTypes.INIT_PAGE
  };
}

function addToSummary(id, num) {
  return {
    type: OrderActionTypes.ADD_TO_SUMMARY,
    id: id,
    num: num,
  };
}

function checkoutOrder() {
  return {
    type: OrderActionTypes.CHECKOUT_ORDER
  }
}

export { nextPage, prevPage, initPage, addToSummary, checkoutOrder }