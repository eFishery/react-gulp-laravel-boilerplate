import React, { PropTypes } from 'react'
import { Col, Row, Panel, Button } from 'react-bootstrap'

class Checkout extends React.Component {
  componentDidMount() {
    console.log("Component Checkout did mount!");
  }

  render() {
    const onSubmitOrder = this.props.onSubmitOrder;
    
    return (
      <Panel className="panel-checkout full-height" >
        <Button onClick={() => onSubmitOrder()}>Button</Button>
      </Panel>
    )
  }
}

Checkout.propTypes = {
  onSubmitOrder: PropTypes.func.isRequired,
}

export default Checkout