import React, { PropTypes } from 'react'
import { Col, Row, ButtonGroup, Button } from 'react-bootstrap'

class OrderButtons extends React.Component {
  componentDidMount() {
    console.log("Component OrderButtons did mount!");
  }

  render() {
    const onButtonClick = this.props.onButtonClick;

    return (
      <ButtonGroup className="feeder-btn pull-right">
        <Button className="btn-nav" onClick={() => onButtonClick("prev")}>Left</Button>
        <Button className="btn-nav" onClick={() => onButtonClick("next")}>Right</Button>
      </ButtonGroup>
    )
  }
}

OrderButtons.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}

export default OrderButtons