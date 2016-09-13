import { connect } from 'react-redux'
import * as OrderActions from '../redux/OrderActions'
import OrderPage from '../component/OrderPage'

const mapStateToProps = (state) => {
  return {
  	sectionNumber: state.orderPageSwitch.sectionNumber,
    feederState: state.orderFeederUpdate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: (text) => {
      if (text == "prev") {
        console.log("prev");
        dispatch(OrderActions.prevPage())
      }
      else {
        console.log("next");
        dispatch(OrderActions.nextPage())
      }
    },
    onFeederChange: (id, num) => {
      dispatch(OrderActions.addToSummary(id, num))
    },
    onSubmitOrder: () => {
      dispatch(OrderActions.checkoutOrder())
    },
    onInit: () => {
      console.log("init")
      dispatch(OrderActions.initPage())
    }
  }
}

const OrderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPage)

export default OrderContainer