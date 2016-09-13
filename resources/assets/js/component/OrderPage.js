import React, { PropTypes } from 'react'
import { Col, Row, Grid } from 'react-bootstrap'

import Feeder from './Feeder'
import Data from './Data'
import Checkout from './Checkout'
import Summary from './Summary'
import Terms from './Terms'
import OrderButtons from './OrderButtons'

class OrderPage extends React.Component {
  componentWillMount() {
    this.props.onInit();
  }

  componentDidMount() {
    console.log("Component OrderPage did mount!");
  }

  render() {
    const { onButtonClick, sectionNumber, onFeederChange, onSubmitOrder, feederState } = this.props;
    const showSection = {
      feeder: sectionNumber == 1 ? true : false,
      data: sectionNumber == 2 ? true : false,
      checkout: sectionNumber == 3 ? true : false,
    }

    return (
      <Grid className="margin-tp-25 full-height">
        <Row className="full-height">
          <Col xs={12} md={8} className="full-height">
            { showSection.feeder ? <Feeder onFeederChange={onFeederChange} feederState={feederState} /> : null }
            { showSection.data ? <Data /> : null }
            { showSection.checkout ? <Checkout onSubmitOrder={onSubmitOrder} /> : null }
            <OrderButtons onButtonClick={onButtonClick} />
          </Col>
          <Col xs={12} md={4} className="full-height">
            <Summary feederState={feederState} />
            <Terms />
          </Col>
        </Row>
      </Grid>
    )
  }
}

OrderPage.propTypes = {
  sectionNumber: PropTypes.number.isRequired,
  feederState: PropTypes.array.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onSubmitOrder: PropTypes.func.isRequired,
  onFeederChange: PropTypes.func.isRequired,
  onInit: PropTypes.func.isRequired
}

export default OrderPage