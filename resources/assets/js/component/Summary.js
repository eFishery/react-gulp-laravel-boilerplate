import React, { PropTypes } from 'react'
import { Col, Row, Panel } from 'react-bootstrap'

class Summary extends React.Component {
  componentDidMount() {
    console.log("Component Summary did mount!");
  }

  render() {
    const feederState = this.props.feederState;
    const id = feederState[0].id;
    const num = feederState[0].num;

    return (
      <Panel className="panel-summary half-height">
        Pembelian feeder {id}: {num} buah: {num * 50000}
      </Panel>
    )
  }
}

Summary.propTypes = {
  feederState: PropTypes.array.isRequired,
}

export default Summary