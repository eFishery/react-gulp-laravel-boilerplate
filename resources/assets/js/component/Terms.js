import React, { PropTypes } from 'react'
import { Col, Row, Panel } from 'react-bootstrap'

class Terms extends React.Component {
  componentDidMount() {
    console.log("Component Terms did mount!");
  }

  render() {
    return (
      <Panel className="panel-terms half-height">
        Terms
      </Panel>
    )
  }
}

Terms.propTypes = {
  
}

export default Terms